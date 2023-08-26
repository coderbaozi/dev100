<script  lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { ListData } from '../../api/virtualList'

const screenHeight = ref(0)
const start = ref(0)
const end = ref(0)
const ContinerRef = ref<HTMLDivElement>()
const currentOffset = ref(0)


const props = defineProps({
  listData: {
    type: Array<ListData>,
    default: () => []
  },
  itemSize: {
    type: Number,
    default: 200
  }
})

// 列表总高度
const listHeight = computed(() => props.listData.length * props.itemSize)
// 显示数据的个数 向上取整
const visibleCount = computed(() => Math.ceil(screenHeight.value / props.itemSize))
// 真实显示的数据
const visibleData = computed(() => props.listData.slice(start.value, end.value))

onMounted(() => {
  screenHeight.value = ContinerRef.value!.clientHeight
  end.value = start.value + visibleCount.value
})

function handleScroll(e: any) {
  // 记录当前滚动位置
  let scrollTop = e.target.scrollTop
  start.value = ~~(scrollTop / props.itemSize)
  end.value = start.value + visibleCount.value
  // TODO: let me see see
  currentOffset.value = scrollTop - (scrollTop % props.itemSize)
}

</script>

<template>
  <div @scroll="handleScroll" class="container" ref="ContinerRef">
    <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="content" :style="{ transform: `translate3d(0, ${currentOffset}px, 0)` }">
      <div v-for="item in visibleData" :key="item.id" class="list-item"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">
        {{ item.username }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  overflow: auto;
}

.phantom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
}

.list-item {
  padding: 10px;
  border: 1px solid #999;
}
</style>