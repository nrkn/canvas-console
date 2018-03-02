import { Options } from './default-options';
import { CanvasConsoleApi } from './types';
declare const CanvasConsole: (container: Element, options?: Options | undefined) => Promise<CanvasConsoleApi>;
export = CanvasConsole;
