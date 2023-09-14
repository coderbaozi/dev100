<script setup lang="ts">
import DevLayout from '../layout/devLayout.vue'

// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(fn: Function, delay: number) {
  let timeoutId: number

  return function (...args: any[]) {
    if (timeoutId)
      clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

function addDom() {
  const domParent = document.getElementById('debounce') as HTMLDivElement
  const subDom = document.createElement('p')
  subDom.innerText = 'hi~ debounce'
  domParent.appendChild(subDom)
}

const handleDebounceRes = debounce(addDom, 1000)
</script>

<template>
  <DevLayout round>
    <template #Round>
      <div class="flex justify-center items-center flex-col w-full">
        <button class="font-serif border border-gray- p-2" @click="handleDebounceRes">
          addDomElement
        </button>
        <code>Multiple clicks are executed only once</code>
        <div id="debounce" class="border border-green-500 p-4 m-10">
          <span>hi~ debounce</span>
        </div>
      </div>
    </template>
  </DevLayout>
</template>
