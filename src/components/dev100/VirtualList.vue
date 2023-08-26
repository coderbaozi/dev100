<script setup lang="ts">
import VirtualList from '../VirtualList/index.vue'
import { virtualListData } from '../../api/virtualList'
</script>

<template>
  <VirtualList :list-data="virtualListData"></VirtualList>
</template>