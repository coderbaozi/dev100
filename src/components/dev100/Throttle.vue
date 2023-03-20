<script setup lang="ts">
import DevLayout from '../layout/devLayout.vue';

function throttle(fn: Function,delay: number) {
  let last = 0
  return (...args: any[]) => {
    let now = Date.now()
    if(now - last < delay) {
      return
    }
    last = now
    return fn(...args)
  }
}

function addDom() {
  const domParent = document.getElementById('throttle') as HTMLDivElement
  const subDom = document.createElement('p')
  subDom.innerText = 'throttle hello'
  domParent.appendChild(subDom)
}

const handleThrottle = throttle(addDom,3000)
</script>

<template>
<dev-layout title="throttlejs">
  <button @click="handleThrottle" class="font-serif border border-gray- p-2">addDomElement</button>
  <code>Executed only once in a certain period of time</code>
  <div id="throttle" class="border border-green-500 p-4 m-10">
    <p>throttle hello</p>
  </div>
</dev-layout>
</template>