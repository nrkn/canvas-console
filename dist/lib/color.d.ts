export declare const R = 0;
export declare const G = 1;
export declare const B = 2;
export declare const A = 3;
export interface RgbaTuple extends Array<number> {
    0: number;
    1: number;
    2: number;
    3: number;
}
export declare type Palette = RgbaTuple[];
export declare type ColorMapper = (rgba: RgbaTuple) => RgbaTuple;
export declare const recolorTwoBit: (sourceColor: RgbaTuple, fore: RgbaTuple, back: RgbaTuple) => RgbaTuple;
