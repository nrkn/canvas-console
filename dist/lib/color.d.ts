export declare type RgbaTuple = [number, number, number, number];
export declare type Palette = RgbaTuple[];
export declare type ColorMapper = (rgba: RgbaTuple) => RgbaTuple;
export declare const recolorTwoBit: (sourceColor: [number, number, number, number], fore: [number, number, number, number], back: [number, number, number, number]) => [number, number, number, number];
