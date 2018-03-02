import { RgbaTuple } from './lib/color';
export interface CanvasConsoleApi {
    putChar: (ch: string | number, column: number, row: number, fore: RgbaTuple | number, back: RgbaTuple | number) => void;
    width: number;
    height: number;
}
