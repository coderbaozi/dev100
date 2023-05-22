<script lang='ts' setup>
import useBackHome from "@/hooks/useBackHome"
import { useRoute } from "vue-router";
const { backHome } = useBackHome()
const route = useRoute()
const getTitle = () => {
  return /\/([^\/]*)$/.exec(route.path)![1]
}

const props = defineProps({
  round: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <nav class="relative text-slate-700 fixed w-full text-center pt-3">
    <Icon @click="backHome" class="absolute left-2 top-1 hover:text-lime-300 cursor-pointer text-2xl"
      icon="material-symbols:arrow-back-rounded"></Icon>
    <header class="mb-3 text-gray-500 text-xl font-serif">{{ getTitle() }}</header>
  </nav>
  <div class="max-w-3xl mx-auto">
    <slot></slot>
  </div>
  <template v-if="props.round">
    <div class="flex mt-30 border h-md max-w-xl mx-auto">
      <slot name="Round"></slot>
    </div>
  </template>
</template>

<style scoped></style>