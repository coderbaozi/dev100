<template>
  <button @click="handleClick">traggle</button>
</template>
<script setup lang="ts">
import Message from "../Message/Message";
const handleClick = () => {
  Message({ text: "hello", type: 'success' })
}
</script>