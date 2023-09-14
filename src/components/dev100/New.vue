<script lang="ts" setup>
</script>

<template>
  <dev-layout round>
    <template #Round>
      <div class="w-full text-center h-20">
        <img src="@/assets/new.png">
        <p class="prose">
          - 创建一个空的简单JavaScript对象（即{}）
          链接该对象（即设置该对象的构造函数）到另一个对象
          将步骤1新创建的对象作为this的上下文
          如果该函数没有返回对象，则返回this。
        </p>
      </div>
    </template>
  </dev-layout>
</template>
