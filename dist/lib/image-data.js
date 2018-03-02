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
    image.data[i] = color[color_1.R];
    image.data[i + 1] = color[color_1.G];
    image.data[i + 2] = color[color_1.B];
    image.data[i + 3] = color[color_1.A];
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
//# sourceMappingURL=image-data.js.map