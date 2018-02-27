# canvas-console

Console/terminal style drawing to an HTML canvas

[Example](/example/)

![Screenshot](/img/console.png)

## Install, usage etc

`npm install canvas-console`

```javascript
const CanvasConsole = require( 'canvas-console' )

const randInt = exclMax => Math.floor( Math.random() * exclMax )

const container = document.querySelector( '.container' )

CanvasConsole( container )
.then( canvasConsole => {
  const { width, height, putChar } = canvasConsole

  const drawRandom = () => {
    for( let vY = 0; vY < height; vY++ ){
      for( let vX = 0; vX < width; vX++ ){
        const ch = String.fromCharCode( randInt( 256 ) )
        const fore = randInt( 16 )
        const back = randInt( 16 )

        putChar( ch, vX, vY, fore, back )
      }
    }

    requestAnimationFrame( drawRandom )
  }

  drawRandom()
})
```

## API

### CanvasConsole

A function that takes a parent container and optional options (options
described below) and returns a promise containing the API

The container should have a width and height

The canvas will fill as much of the container as possible, and automatically
handle resizing the viewport

The API currently provides only `putChar`:

### putChar

```typescript
( ch: string | number, column: number, row: number, fore: RgbaTuple | number = 7, back: RgbaTuple | number = 0 ) => void
```

#### ch

A single character string or a number

If a single character string, it uses the sprite from the spritesheet with the
same index as the code point of the character eg `'A'` will use the sprite with
the index `65`

If a number, it uses the sprite with this index

#### column

The column in which to draw the character

#### row

The row in which to draw the character

#### fore

The foreground color to use when drawing the character - this can either be
an index into the palette, or an RGBA tuple array, eg `[ 0, 127, 255, 255 ]`

#### back

The background color to use when drawing the character - this can either be
an index into the palette, or an RGBA tuple array, eg `[ 0, 127, 255, 255 ]`

## Options

```typescript
export interface Options {
  spriteSize?: Size,
  viewSize?: Size,
  palette?: Palette,
  spriteSource?: string,
  useCleanScaling?: boolean
}
```

### spriteSize

The size of the sprites in your sprite sheet

#### default:

```json
{
  "width": 8,
  "height": 16
}
```

### viewSize

The size of the terminal in text columns and rows

#### default:

```json
{
  "width": 80,
  "height": 25
}
```

### palette

The palette to use

#### default:

```json
[
  [ 0, 0, 0, 255 ],
  [ 0, 0, 170, 255 ],
  [ 0, 170, 0, 255 ],
  [ 0, 170, 170, 255 ],
  [ 170, 0, 0, 255 ],
  [ 170, 0, 170, 255 ],
  [ 170, 85, 0, 255 ],
  [ 170, 170, 170, 255 ],
  [ 85, 85, 85, 255 ],
  [ 85, 85, 255, 255 ],
  [ 85, 255, 85, 255 ],
  [ 85, 255, 255, 255 ],
  [ 255, 85, 85, 255 ],
  [ 255, 85, 255, 255 ],
  [ 255, 255, 85, 255 ],
  [ 255, 255, 255, 255 ]
]
```

The palette can have as few or many colors as you like

The palette is optional, you can just pass RGBA tuples eg `[ 0, 127, 255, 255 ]`
to `putChar` if you prefer

### spriteSource

The source uri for your spritesheet

Defaults to a data URI of the following image:

![spriteSource](/img/bios-8.png)

The spritesheet can be arranged in any number of columns and rows so long as
they line up according to the `spriteSize`

### useCleanScaling

Defaults to `true`

If `true`, the console will only be scaled up in clean multiples of the
`spriteSize`

If `false`, the console will fill as much of the parent container as possible
