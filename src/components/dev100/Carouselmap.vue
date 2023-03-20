<script setup lang="ts">
import { nextTick } from 'vue';

const imgUrls = ['https://i.328888.xyz/2023/03/16/KBc2t.jpeg',
  'https://i.328888.xyz/2023/03/16/KBrGP.jpeg',
  'https://i.328888.xyz/2023/03/16/KBm7J.jpeg',]

let curIndex = 0

function slide(container:HTMLElement){
  let distanceMoved = 0
  let step = 100
  let curConleft = container.offsetLeft
  const slideInterval = setInterval(()=>{
    if(Math.abs(600 - distanceMoved) > step) {
      curConleft -= step;
      container.style.left = `${curConleft}px`
      distanceMoved += step
    }else {
      clearInterval(slideInterval)
      container.style.left = `${curConleft - 300 + distanceMoved }px`;
      distanceMoved = 0;
      if(curIndex++ === imgUrls.length) {
        curIndex = 0;
        container.style.left = `0`
      }
    }
  },10)
}

nextTick(()=>{
  let slideContainer = document.querySelector('ul') as HTMLElement;
  let timer = setInterval(() => {slide(slideContainer)},3000);
})
</script>
<template>
  <dev-layout title="Carousel Map">
    <div class="w-300 h-300 relative overflow-hidden">
      <ul class="flex absolute list-none">
        <li class="list-none" v-for="img,index in imgUrls" :key="index" >
          <img class=" w-300" :src="img" alt="" />
        </li>
      </ul>
    </div>
  </dev-layout>
</template>