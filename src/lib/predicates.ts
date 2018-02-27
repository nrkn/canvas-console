import { Size } from './geometry'
import { RgbaTuple, Palette } from './color'
import { Settings } from '../default-options'

export const isNumber = ( value ) : value is number => typeof value === 'number'

export const isString = ( value ) : value is string => typeof value === 'string'

export const isBoolean = ( value ) : value is boolean =>
  typeof value === 'boolean'

export const isSize = ( value ) : value is Size =>
  value && isNumber( value.width ) && isNumber( value.height )

export const isRgba = ( value ) : value is RgbaTuple =>
  Array.isArray( value ) && value.length === 4 && value.every( isNumber )

export const isPalette = ( value ) : value is Palette =>
  Array.isArray( value ) && value.every( isRgba )

export const isSettings = ( value ) : value is Settings =>
  value && isSize( value.spriteSize ) && isSize( value.viewSize ) &&
  isPalette( value.palette ) && isString( value.spriteSource ) &&
  isBoolean( value.useCleanScaling )
