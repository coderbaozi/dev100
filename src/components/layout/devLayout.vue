<script lang='ts' setup>
import useBackHome from "@/hooks/useBackHome"
const { backHome } = useBackHome()

</script>

<template>
  <nav class="float-left cursor-pointer text-slate-700">
    <Icon @click="backHome" class="text-2xl" icon="material-symbols:arrow-back-rounded"></Icon>
  </nav>

  <div class="flex items-center justify-center h-screen px-5">
    <slot></slot>
  </div>

</template>

<style scoped>

</style>