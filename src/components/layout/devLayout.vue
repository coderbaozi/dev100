<script lang='ts' setup>
import useBackHome from "@/hooks/useBackHome"
const { backHome } = useBackHome()

const props = defineProps({
  title: String
})
</script>

<template>
  <nav class="float-left cursor-pointer text-slate-700">
    <Icon @click="backHome" class="text-2xl" icon="material-symbols:arrow-back-rounded"></Icon>
  </nav>

  <div class="flex items-center flex-col justify-center pt-6 px-5">
    <header class="mb-3 text-gray-500 text-s font-serif">{{ props.title }}</header>
    <slot></slot>
  </div>

</template>

<style scoped>

</style>