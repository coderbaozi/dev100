<script lang="ts" setup>
import { onMounted, reactive, ref, } from 'vue'
import { useScroll } from "../../hooks/useInfinteScroll"
const continerRef = ref<HTMLDivElement>()
const list: any[] = reactive([])
let idx = 0
function getList() {
  return new Promise((resolve, reject) => {
    if (idx < 30) {
      for (let i = idx; i < idx + 10; i++) {
        list.push({ id: i });
      }
      idx += 10
      resolve(1)
    }
    reject(0)
  })
}

onMounted(() => {
  const { init } = useScroll()
  init(getList, continerRef)
})
</script>

<template>
  <div ref="continerRef" class="container">
    <div v-for="item in list" class="box">{{ item.id }}</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid black;
  width: 200px;
  height: 100px;
  overflow: auto
}

.box {
  height: 30px;
  width: 100px;
  background: red;
  margin-bottom: 10px
}
</style>