"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Only checks the red channel of sourceColor, assumes background if 0 or
  foreground if anything else.
*/
exports.recolorTwoBit = (sourceColor, fore, back) => sourceColor[0] ? fore : back;
//# sourceMappingURL=color.js.map