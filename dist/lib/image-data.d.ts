import { ColorMapper } from './color';
export declare const getIndex: (image: ImageData, x: number, y: number) => number;
export declare const getColor: (image: ImageData, x: number, y: number) => [number, number, number, number];
export declare const putColor: (image: ImageData, color: [number, number, number, number], x: number, y: number) => void;
export declare const nearestNeighbourCopy: (source: ImageData, target: ImageData) => void;
export declare const drawMapped: (source: ImageData, target: ImageData, tX: number, tY: number, mapper: ColorMapper) => void;
export declare const drawColored: (source: ImageData, target: ImageData, tX: number, tY: number, fore: [number, number, number, number], back: [number, number, number, number]) => void;
