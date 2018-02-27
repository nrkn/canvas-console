import { Options } from './default-options';
declare const CanvasConsole: (container: Element, options?: Options | undefined) => Promise<{
    putChar: (ch: string, column: number, row: number, fore?: number | [number, number, number, number], back?: number | [number, number, number, number]) => void;
    readonly width: number;
    readonly height: number;
}>;
export = CanvasConsole;
