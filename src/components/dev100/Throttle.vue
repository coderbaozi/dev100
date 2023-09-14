<script setup lang="ts">
import DevLayout from '../layout/devLayout.vue'

// eslint-disable-next-line @typescript-eslint/ban-types
function throttle(fn: Function, delay: number) {
  let last = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - last < delay)
      return

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

const handleThrottle = throttle(addDom, 3000)
</script>

<template>
  <DevLayout round>
    <template #Round>
      <div class="flex justify-center items-center flex-col w-full">
        <button class="font-serif border border-gray- p-2" @click="handleThrottle">
          addDomElement
        </button>
        <code>Executed only once in a certain period of time</code>
        <div id="throttle" class="border border-green-500 p-4 m-10">
          <p>throttle hello</p>
        </div>
      </div>
    </template>
  </DevLayout>
</template>
