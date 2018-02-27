import { Size } from './geometry'

export const getSprites = ( img: HTMLImageElement, spriteSize: Size ) => {
  const { width, height } = spriteSize
  const canvas = document.createElement( 'canvas' )
  const c = canvas.getContext( '2d' )!

  canvas.width = img.width
  canvas.height = img.height

  c.drawImage( img, 0, 0 )

  const sprites: ImageData[] = []

  for( let y = 0; y < img.height; y += height ){
    for( let x = 0; x < img.width; x += width ){
      const sprite = c.getImageData( x, y, width, height )

      sprites.push( sprite )
    }
  }

  return sprites
}

export const loadImage = async( uri: string ) =>
  new Promise<HTMLImageElement>( ( resolve, reject ) => {
    try {
      const image = new Image()

      image.addEventListener( 'load', () => {
        resolve( image )
      })

      image.src = uri
    } catch( err ){
      reject( err )
    }
  })

export const loadSprites = async ( uri: string, spriteSize: Size ) => {
  const spriteSheet = await loadImage( uri )

  return getSprites( spriteSheet, spriteSize )
}
