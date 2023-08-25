/**
 * https://github.com/antfu/100/blob/bd2b806057cf5f1b3cae8da1d1d17ead01732b02/src/utils/canvas.ts
 */
export interface CanvasConfig {
  width?: number
  height?: number
  _dpi?: number
}

export function initCanvas(canvas: HTMLCanvasElement, options: CanvasConfig = { width: 400, height: 400 }) {
  const { width, height } = options

  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  // @ts-expect-error
  const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
  const dpi = options._dpi || dpr / bsr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.width = dpi * width!
  canvas.height = dpi * height!
  ctx!.scale(dpi, dpi)

  return { ctx, dpi }
}