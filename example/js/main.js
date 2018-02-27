(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spriteSize = {
    width: 8,
    height: 16
};
exports.viewSize = {
    width: 80,
    height: 25
};
exports.palette = [
    [0, 0, 0, 255],
    [0, 0, 170, 255],
    [0, 170, 0, 255],
    [0, 170, 170, 255],
    [170, 0, 0, 255],
    [170, 0, 170, 255],
    [170, 85, 0, 255],
    [170, 170, 170, 255],
    [85, 85, 85, 255],
    [85, 85, 255, 255],
    [85, 255, 85, 255],
    [85, 255, 255, 255],
    [255, 85, 85, 255],
    [255, 85, 255, 255],
    [255, 255, 85, 255],
    [255, 255, 255, 255]
];
exports.spriteSource = `data:image/png;base64,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`;
exports.useCleanScaling = true;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanvasConsole = require("..");
const utils_1 = require("../lib/utils");
const viewport = document.getElementById('viewport');
if (!viewport) {
    throw Error('No #viewport');
}
const start = async () => {
    const canvasConsole = await CanvasConsole(viewport);
    const { width, height } = canvasConsole;
    const drawRandom = () => {
        for (let vY = 0; vY < height; vY++) {
            for (let vX = 0; vX < width; vX++) {
                const ch = String.fromCharCode(utils_1.randInt(256));
                const fore = utils_1.randInt(16);
                const back = utils_1.randInt(16);
                canvasConsole.putChar(ch, vX, vY, fore, back);
            }
        }
        requestAnimationFrame(drawRandom);
    };
    drawRandom();
};
start();

},{"..":3,"../lib/utils":9}],3:[function(require,module,exports){
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

},{"./default-options":1,"./lib/geometry":5,"./lib/image":7,"./lib/image-data":6,"./lib/predicates":8}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Only checks the red channel of sourceColor, assumes background if 0 or
  foreground if anything else.
*/
exports.recolorTwoBit = (sourceColor, fore, back) => sourceColor[0] ? fore : back;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleRectInRect = (parentSize, childSize) => Math.min(parentSize.width / childSize.width, parentSize.height / childSize.height);
exports.scaleSize = (size, scale) => {
    return {
        width: size.width * scale,
        height: size.height * scale
    };
};
exports.center = (parent, child) => (parent - child) / 2;
exports.ElementInnerSize = (el) => {
    const boundingRect = el.getBoundingClientRect();
    const styles = window.getComputedStyle(el);
    const width = boundingRect.width - parseFloat(styles.paddingLeft) -
        parseFloat(styles.paddingRight);
    const height = boundingRect.height - parseFloat(styles.paddingTop) -
        parseFloat(styles.paddingBottom);
    return { width, height };
};

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("./color");
exports.getIndex = (image, x, y) => (y * image.width + x) * 4;
exports.getColor = (image, x, y) => {
    const i = exports.getIndex(image, x, y);
    const r = image.data[i];
    const g = image.data[i + 1];
    const b = image.data[i + 2];
    const a = image.data[i + 3];
    return [r, g, b, a];
};
exports.putColor = (image, color, x, y) => {
    const i = exports.getIndex(image, x, y);
    image.data[i] = color[0];
    image.data[i + 1] = color[1];
    image.data[i + 2] = color[2];
    image.data[i + 3] = color[3];
};
exports.nearestNeighbourCopy = (source, target) => {
    const fX = source.width / target.width;
    const fY = source.height / target.height;
    for (let y = 0; y < target.height; y++) {
        for (let x = 0; x < target.width; x++) {
            const sX = Math.floor(x * fX);
            const sY = Math.floor(y * fY);
            const sourceColor = exports.getColor(source, sX, sY);
            exports.putColor(target, sourceColor, x, y);
        }
    }
};
exports.drawMapped = (source, target, tX, tY, mapper) => {
    const { width, height } = source;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const sourceColor = exports.getColor(source, x, y);
            const targetColor = mapper(sourceColor);
            exports.putColor(target, targetColor, x + tX, y + tY);
        }
    }
};
exports.drawColored = (source, target, tX, tY, fore, back) => {
    const mapper = (sourceColor) => color_1.recolorTwoBit(sourceColor, fore, back);
    exports.drawMapped(source, target, tX, tY, mapper);
};

},{"./color":4}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSprites = (img, spriteSize) => {
    const { width, height } = spriteSize;
    const canvas = document.createElement('canvas');
    const c = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    c.drawImage(img, 0, 0);
    const sprites = [];
    for (let y = 0; y < img.height; y += height) {
        for (let x = 0; x < img.width; x += width) {
            const sprite = c.getImageData(x, y, width, height);
            sprites.push(sprite);
        }
    }
    return sprites;
};
exports.loadImage = async (uri) => new Promise((resolve, reject) => {
    try {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = uri;
    }
    catch (err) {
        reject(err);
    }
});
exports.loadSprites = async (uri, spriteSize) => {
    const spriteSheet = await exports.loadImage(uri);
    return exports.getSprites(spriteSheet, spriteSize);
};

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = (value) => typeof value === 'number';
exports.isString = (value) => typeof value === 'string';
exports.isBoolean = (value) => typeof value === 'boolean';
exports.isSize = (value) => value && exports.isNumber(value.width) && exports.isNumber(value.height);
exports.isRgba = (value) => Array.isArray(value) && value.length === 4 && value.every(exports.isNumber);
exports.isPalette = (value) => Array.isArray(value) && value.every(exports.isRgba);
exports.isSettings = (value) => value && exports.isSize(value.spriteSize) && exports.isSize(value.viewSize) &&
    exports.isPalette(value.palette) && exports.isString(value.spriteSource) &&
    exports.isBoolean(value.useCleanScaling);

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randInt = (exclMax) => Math.floor(Math.random() * exclMax);

},{}]},{},[2]);
