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
//# sourceMappingURL=image.js.map