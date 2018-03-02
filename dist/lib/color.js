"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R = 0;
exports.G = 1;
exports.B = 2;
exports.A = 3;
/*
  Only checks the red channel of sourceColor, assumes background if 0 or
  foreground if anything else.
*/
exports.recolorTwoBit = (sourceColor, fore, back) => sourceColor[0] ? fore : back;
//# sourceMappingURL=color.js.map