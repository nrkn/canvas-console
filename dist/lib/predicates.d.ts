import { Size } from './geometry';
import { Settings } from '../default-options';
export declare const isNumber: (value: any) => value is number;
export declare const isString: (value: any) => value is string;
export declare const isBoolean: (value: any) => value is boolean;
export declare const isSize: (value: any) => value is Size;
export declare const isRgba: (value: any) => value is [number, number, number, number];
export declare const isPalette: (value: any) => value is [number, number, number, number][];
export declare const isSettings: (value: any) => value is Settings;
