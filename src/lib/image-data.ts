import { RgbaTuple, ColorMapper, recolorTwoBit, R, G, B, A } from './color'

export const getIndex = ( image: ImageData, x: number, y: number ) =>
  ( y * image.width + x ) * 4

export const getColor = ( image: ImageData, x: number, y: number ) : RgbaTuple => {
  const i = getIndex( image, x, y )

  const r = image.data[ i ]
  const g = image.data[ i + 1 ]
  const b = image.data[ i + 2 ]
  const a = image.data[ i + 3 ]

  return [ r, g, b, a ]
}

export const putColor = ( image: ImageData, color: RgbaTuple, x: number, y: number ) => {
  const i = getIndex( image, x, y )

  image.data[ i ] = color[ R ]
  image.data[ i + 1 ] = color[ G ]
  image.data[ i + 2 ] = color[ B ]
  image.data[ i + 3 ] = color[ A ]
}

export const nearestNeighbourCopy = ( source: ImageData, target: ImageData ) => {
  const fX = source.width / target.width
  const fY = source.height / target.height

  for( let y = 0; y < target.height; y++ ){
    for( let x = 0; x < target.width; x++ ){
      const sX = Math.floor( x * fX )
      const sY = Math.floor( y * fY )

      const sourceColor = getColor( source, sX, sY )

      putColor( target, sourceColor, x, y )
    }
  }
}

export const drawMapped = ( source: ImageData, target: ImageData, tX: number, tY: number, mapper: ColorMapper ) => {
  const { width, height } = source

  for( let y = 0; y < height; y++ ){
    for( let x = 0; x < width; x++ ){
      const sourceColor = getColor( source, x, y )
      const targetColor = mapper( sourceColor )

      putColor( target, targetColor, x + tX, y + tY )
    }
  }
}

export const drawColored = ( source: ImageData, target: ImageData, tX: number, tY: number, fore: RgbaTuple, back: RgbaTuple ) => {
  const mapper : ColorMapper = ( sourceColor: RgbaTuple ) =>
    recolorTwoBit( sourceColor, fore, back )

  drawMapped( source, target, tX, tY, mapper )
}
