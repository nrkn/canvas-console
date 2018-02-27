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
//# sourceMappingURL=geometry.js.map