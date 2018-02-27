export interface Size {
    width: number;
    height: number;
}
export declare const scaleRectInRect: (parentSize: Size, childSize: Size) => number;
export declare const scaleSize: (size: Size, scale: number) => {
    width: number;
    height: number;
};
export declare const center: (parent: number, child: number) => number;
export declare const ElementInnerSize: (el: Element) => Size;
