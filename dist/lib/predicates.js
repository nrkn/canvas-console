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
//# sourceMappingURL=predicates.js.map