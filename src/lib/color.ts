export type RgbaTuple = [ number, number, number, number ]

export type Palette = RgbaTuple[]

export type ColorMapper = ( rgba: RgbaTuple ) => RgbaTuple

/*
  Only checks the red channel of sourceColor, assumes background if 0 or
  foreground if anything else.
*/
export const recolorTwoBit =
  ( sourceColor: RgbaTuple, fore: RgbaTuple, back: RgbaTuple ) : RgbaTuple =>
    sourceColor[ 0 ] ? fore : back
