<script lang='ts' setup>

interface dev {
  id: string,
  title: string,
  path?: string
}
const props = defineProps<dev>()

</script>

<template>
    <a href="#" class="dev space-x-2 text-s text-slate-500 hover:text-zinc-900 hover:font-medium dark:text-slate-300 dark:hover:text-slate-50">
      <span>{{ props.id }}</span>
      <span>{{ props.title }}</span>
    </a>
</template>

<style scoped>
.dev {
  font-family:'Courier New', Courier, monospace;
}
</style>