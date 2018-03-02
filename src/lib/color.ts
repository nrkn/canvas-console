export const R = 0
export const G = 1
export const B = 2
export const A = 3

export interface RgbaTuple extends Array<number> {
  0: number
  1: number
  2: number
  3: number
}

export type Palette = RgbaTuple[]

export type ColorMapper = ( rgba: RgbaTuple ) => RgbaTuple

/*
  Only checks the red channel of sourceColor, assumes background if 0 or
  foreground if anything else.
*/
export const recolorTwoBit =
  ( sourceColor: RgbaTuple, fore: RgbaTuple, back: RgbaTuple ) : RgbaTuple =>
    sourceColor[ 0 ] ? fore : back
