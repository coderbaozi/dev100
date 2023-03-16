<script setup lang="ts">
import { nextTick } from 'vue';
import DevLayout from '../layout/devLayout.vue';

const lazyIntersection = new IntersectionObserver(entiers => {
  // entires is Array monitored
  entiers.forEach((item) => {
    if(item.isIntersecting){
      const imgElement: HTMLImageElement = item.target as HTMLImageElement
      imgElement.src = item.target.getAttribute('data-img') as string
      lazyIntersection.unobserve(item.target)
    }
  })
})

const placeholderImg = 'https://devtool.tech/api/placeholder/420/300?text=loading&bgColor=%23fff&fontSize=50&fontFamily=a'

const imgUrl = [
  'https://i.328888.xyz/2023/03/16/KBc2t.jpeg',
  'https://i.328888.xyz/2023/03/16/KBrGP.jpeg',
  'https://i.328888.xyz/2023/03/16/KBm7J.jpeg',
  'https://i.328888.xyz/2023/03/16/KBpPc.jpeg',
  'https://i.328888.xyz/2023/03/16/KBXWA.jpeg',
  'https://i.328888.xyz/2023/03/16/KBgmo.jpeg',
  'https://i.328888.xyz/2023/03/16/KBxvN.jpeg',
  'https://i.328888.xyz/2023/03/16/KxNIp.jpeg',
  'https://i.328888.xyz/2023/03/16/KxIyL.jpeg',
  'https://i.328888.xyz/2023/03/16/KxrdU.jpeg',
  'https://i.328888.xyz/2023/03/16/Kx3qv.jpeg',
  'https://i.328888.xyz/2023/03/16/Kxc23.jpeg']

  
nextTick(()=>{
  let data = Array.from(document.getElementsByTagName('img'))
  data.forEach(item=>{
    lazyIntersection.observe(item)
  })
})
</script>

<template>
  <dev-layout title="lazy Loading">
    <div class="grid grid-cols-2 gap-5">
      <div v-for="item,index in imgUrl" :key="index" class="overflow-hidden rounded-lg shadow transition">
        <img class="h-56 w-full object-cover" :src="placeholderImg" :data-img="item" alt="" />
        <div class="bg-white p-4">
          <h3 class="mt-0.5 text-lg text-gray-900">LazyLoading</h3>
          <p class="mt-2 text-sm  text-gray-500">contrigulations</p>
        </div>
      </div>
    </div>
  </dev-layout>
</template>