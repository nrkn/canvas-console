export interface Size {
  width: number,
  height: number
}

export const scaleRectInRect = ( parentSize : Size, childSize: Size ) =>
  Math.min(
    parentSize.width / childSize.width,
    parentSize.height / childSize.height
  )

export const scaleSize = ( size: Size, scale: number ) => {
  return {
    width: size.width * scale,
    height: size.height * scale
  }
}

export const center = ( parent: number, child: number ) =>
  ( parent - child ) / 2

export const ElementInnerSize = ( el: Element ) : Size => {
  const boundingRect = el.getBoundingClientRect()
  const styles = window.getComputedStyle( el )

  const width =
    boundingRect.width - parseFloat( styles.paddingLeft! ) -
    parseFloat( styles.paddingRight! )

  const height =
    boundingRect.height - parseFloat( styles.paddingTop! ) -
    parseFloat( styles.paddingBottom! )

  return { width, height }
}