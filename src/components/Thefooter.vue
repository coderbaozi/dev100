<script lang='ts' setup>
import useDark from '@/hooks/useDark'

const { theme, toggleTheme } = useDark()

type iconType = 'ph:cloud-sun-thin' | 'ph:cloud-moon'
// dynamic change icon
function getTheme() {
  let themeicon: iconType = 'ph:cloud-sun-thin'
  if (theme.value === 'light')
    return themeicon
  return themeicon = 'ph:cloud-moon'
}
</script>

<template>
  <nav class="nav space-x-1">
    <Icon class="text-xl text-zinc-400 cursor-pointer hover:text-emerald-900" :icon="getTheme()" @click="toggleTheme" />
    <a href="https://github.com/coderbaozi/dev100">
      <Icon class="text-xl text-zinc-400 cursor-pointer hover:text-emerald-900" icon="uil:github" />
    </a>
  </nav>
</template>

<style scoped></style>
