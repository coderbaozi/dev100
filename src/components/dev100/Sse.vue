<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

interface Imsg {
  msg?: string
}

const message = reactive<Imsg>({ msg: 'loading ' })

onMounted(() => {
  const eventSource = new EventSource('http://localhost:3000/stream')
  eventSource.onmessage = ({ data }) => {
    message.msg += JSON.parse(data).msg
    // eslint-disable-next-line no-console
    console.log('new message', JSON.parse(data))
  }
})
</script>

<template>
  <div>{{ message.msg }}</div>
</template>
