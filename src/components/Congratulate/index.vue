<script lang="ts" setup>
import { onMounted } from 'vue'
import { initCanvas } from '../../utils/canvas'

let context: CanvasContext | null = null

interface CanvasContext {
  width: number
  height: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  parts?: Parts[]
}

interface Parts {
  color: string
  width: number
  height: number
  x: number
  y: number
  dx: number
  dy: number
}

function resolveContext(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  if (!context) {
    context = {
      width: canvas.width,
      height: canvas.height,
      canvas,
      ctx,
    }
  }
  return context
}

function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

function randomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function initParts() {
  const { width, height } = context!
  const parts = []
  for (let i = 0; i < 100; i++) {
    parts.push({
      color: randomColor(),
      width: randomInt(5, 15),
      height: randomInt(5, 15),
      x: randomInt(0, width),
      y: randomInt(0, height),
      dx: randomInt(-2, 2),
      dy: randomInt(1, 3),
    })
  }
  return parts
}

function draw() {
  const { width, height, ctx, parts } = context!
  ctx.clearRect(0, 0, width, height)
  parts?.forEach((part) => {
    ctx.beginPath()
    ctx.rect(part.x, part.y, part.width, part.height)
    ctx.fillStyle = part.color
    ctx.fill()
    part.x += part.dx
    part.y += part.dy
  })
  requestAnimationFrame(draw)
}

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const { ctx } = initCanvas(canvas) as { ctx: CanvasRenderingContext2D }
  resolveContext(canvas, ctx)
})

function handleDrawClick() {
  context!.parts = initParts()
  draw()
}
</script>

<template>
  <div @click="handleDrawClick">
    trigger
  </div>
  <canvas id="canvas" />
</template>
