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
                const ch = utils_1.randInt(256);
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
//# sourceMappingURL=main.js.map