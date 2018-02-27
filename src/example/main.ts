import * as CanvasConsole from '..'
import { randInt } from '../lib/utils'

const viewport = document.getElementById( 'viewport' )

if( !viewport ){
  throw Error( 'No #viewport' )
}

const start = async () => {
  const canvasConsole = await CanvasConsole( viewport )

  const { width, height } = canvasConsole

  const drawRandom = () => {
    for( let vY = 0; vY < height; vY++ ){
      for( let vX = 0; vX < width; vX++ ){
        const ch = randInt( 256 )
        const fore = randInt( 16 )
        const back = randInt( 16 )

        canvasConsole.putChar( ch, vX, vY, fore, back )
      }
    }

    requestAnimationFrame( drawRandom )
  }

  drawRandom()
}

start()
