<script setup lang="ts">
import Message from '../Message/Message'

function handleClick() {
  Message({ text: 'hello', type: 'success' })
}
</script>

<template>
  <button @click="handleClick">
    traggle
  </button>
</template>
