"use strict";
const default_options_1 = require("./default-options");
const geometry_1 = require("./lib/geometry");
const image_1 = require("./lib/image");
const image_data_1 = require("./lib/image-data");
const predicates_1 = require("./lib/predicates");
const defaultOptions = {
    spriteSize: default_options_1.spriteSize, viewSize: default_options_1.viewSize, palette: default_options_1.palette, spriteSource: default_options_1.spriteSource, useCleanScaling: default_options_1.useCleanScaling
};
const displayCanvasStyle = {
    display: 'block',
    margin: 'auto'
};
const CanvasConsole = async (container, options) => {
    const settings = Object.assign(defaultOptions, options);
    const { spriteSize, viewSize, palette, spriteSource, useCleanScaling } = settings;
    const unscaledSize = {
        width: spriteSize.width * viewSize.width,
        height: spriteSize.height * viewSize.height
    };
    const displayCanvas = document.createElement('canvas');
    const c = displayCanvas.getContext('2d');
    const buffer = c.createImageData(unscaledSize.width, unscaledSize.height);
    Object.assign(displayCanvas.style, displayCanvasStyle);
    const sprites = await image_1.loadSprites(spriteSource, spriteSize);
    let scaledBuffer;
    const blit = () => {
        image_data_1.nearestNeighbourCopy(buffer, scaledBuffer);
        c.putImageData(scaledBuffer, 0, 0);
        requestAnimationFrame(blit);
    };
    const onResize = () => {
        const parentSize = geometry_1.ElementInnerSize(container);
        let scale = geometry_1.scaleRectInRect(parentSize, unscaledSize);
        if (useCleanScaling)
            scale = (scale > 1 ? Math.floor(scale) : scale);
        const scaledSize = geometry_1.scaleSize(unscaledSize, scale);
        Object.assign(displayCanvas, scaledSize);
        displayCanvas.style.marginTop =
            geometry_1.center(parentSize.height, scaledSize.height) + 'px';
        scaledBuffer = c.createImageData(scaledSize.width, scaledSize.height);
    };
    const putChar = (ch, column, row, fore = 7, back = 0) => {
        const { width, height } = spriteSize;
        const sprite = sprites[ch.charCodeAt(0)];
        const x = column * width;
        const y = row * height;
        fore = predicates_1.isNumber(fore) ? palette[fore] : fore;
        back = predicates_1.isNumber(back) ? palette[back] : back;
        image_data_1.drawColored(sprite, buffer, x, y, fore, back);
    };
    container.appendChild(displayCanvas);
    window.addEventListener('resize', onResize);
    onResize();
    blit();
    return {
        putChar,
        get width() { return viewSize.width; },
        get height() { return viewSize.height; }
    };
};
module.exports = CanvasConsole;
//# sourceMappingURL=index.js.map