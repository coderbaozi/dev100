<script lang='ts' setup>
interface devInfo {
  id: number,
  title: string,
  desc: string,
  path: string
}
const props = defineProps<devInfo>()
</script>

<template>
  <a href="#" class="relative flex justify-between text-justify rounded-l p-4 shadow-xl">
    <div class="px-2">
      <Icon class="text-4xl text-slate-500" icon="icon-park-outline:experiment-one" />
      <h1 class="text-lg mt-4 text-grey-900 font-bold">{{ props.title }}</h1>

      <p class="description mt-2 text-xm text-gray-900 ">
        {{ props.desc }}
      </p>

    </div>
    <span class="absolute top-2 right-4 py-1 rounded-xl w-16 text-center bg-rose-50">
      <Icon icon="bi:calendar2-day"></Icon>
      <p>To <span class="text-green-600">{{ props.id }}</span></p>
    </span>
  </a>
</template>

<style scoped>
.description {
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
</style>