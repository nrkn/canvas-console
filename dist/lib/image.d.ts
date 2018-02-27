import { Size } from './geometry';
export declare const getSprites: (img: HTMLImageElement, spriteSize: Size) => ImageData[];
export declare const loadImage: (uri: string) => Promise<HTMLImageElement>;
export declare const loadSprites: (uri: string, spriteSize: Size) => Promise<ImageData[]>;
