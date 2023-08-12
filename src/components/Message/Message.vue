<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'warn'
  }
})
const style: Record<string, any> = {
  warn: {
    icon: 'icon-warning',
    color: '#E6A23C',
    backgroundColor: 'rgb(253, 246, 236)',
    borderColor: 'rgb(250, 236, 216)'
  },
  error: {
    icon: 'icon-shanchu',
    color: '#F56C6C',
    backgroundColor: 'rgb(254, 240, 240)',
    borderColor: 'rgb(253, 226, 226)'
  },
  success: {
    icon: 'icon-queren2',
    color: '#67C23A',
    backgroundColor: 'rgb(240, 249, 235)',
    borderColor: 'rgb(225, 243, 216)'
  }
}
const isShow = ref(false)
onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <Transition name="down">
    <div class="message" :style="style[props.type]" v-show="isShow">
      <span class="messageText">{{ text }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.message {
  width: 300px;
  height: 50px;
  z-index: 9999;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
}

.messageText {
  vertical-align: middle;
}
</style>