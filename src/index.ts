import {
  Options, Settings, spriteSize, viewSize, palette, spriteSource,
  useCleanScaling
} from './default-options'

import {
  Size, ElementInnerSize, scaleSize, center, scaleRectInRect
} from './lib/geometry'

import { loadSprites } from './lib/image'
import { nearestNeighbourCopy, drawColored } from './lib/image-data'
import { RgbaTuple } from './lib/color'
import { isNumber } from './lib/predicates'
import { CanvasConsoleApi } from './types'

const defaultOptions: Settings = {
  spriteSize, viewSize, palette, spriteSource, useCleanScaling
}

const displayCanvasStyle = {
  display: 'block',
  margin: 'auto'
}

const CanvasConsole = async ( container: Element, options?: Options ) => {
  const settings = Object.assign( defaultOptions, options )

  const {
    spriteSize, viewSize, palette, spriteSource, useCleanScaling
  } = settings

  const unscaledSize: Size = {
    width: spriteSize.width * viewSize.width,
    height: spriteSize.height * viewSize.height
  }

  const displayCanvas = document.createElement( 'canvas' )
  const c = displayCanvas.getContext( '2d' )!
  const buffer = c.createImageData( unscaledSize.width, unscaledSize.height )

  Object.assign( displayCanvas.style, displayCanvasStyle )

  const sprites = await loadSprites( spriteSource, spriteSize )

  let scaledBuffer : ImageData

  const blit = () => {
    nearestNeighbourCopy( buffer, scaledBuffer )
    c.putImageData( scaledBuffer, 0, 0 )

    requestAnimationFrame( blit )
  }

  const onResize = () => {
    const parentSize = ElementInnerSize( container )

    let scale = scaleRectInRect( parentSize, unscaledSize )

    if( useCleanScaling ) scale = ( scale > 1 ? Math.floor( scale ) : scale )

    const scaledSize = scaleSize( unscaledSize, scale )

    Object.assign( displayCanvas, scaledSize )

    displayCanvas.style.marginTop =
      center( parentSize.height, scaledSize.height ) + 'px'

    scaledBuffer = c.createImageData( scaledSize.width, scaledSize.height )
  }

  const putChar = ( ch: string | number, column: number, row: number, fore: RgbaTuple | number = 7, back: RgbaTuple | number = 0 ) => {
    const { width, height } = spriteSize
    const spriteIndex = isNumber( ch ) ? ch : ch.charCodeAt( 0 )
    const sprite = sprites[ spriteIndex ]
    const x = column * width
    const y = row * height

    fore = isNumber( fore ) ? palette[ fore ] : fore
    back = isNumber( back ) ? palette[ back ] : back

    drawColored( sprite, buffer, x, y, fore, back )
  }

  container.appendChild( displayCanvas )

  window.addEventListener( 'resize', onResize )

  onResize()
  blit()

  const api: CanvasConsoleApi = {
    putChar,
    get width(){ return viewSize.width },
    get height(){ return viewSize.height }
  }

  return api
}

export = CanvasConsole
