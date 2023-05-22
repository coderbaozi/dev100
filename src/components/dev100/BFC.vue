<script lang="ts" setup>
</script>
<template>
  <dev-layout>
    <Show>
      <p>
        html根元素<br>
        float 不为 none<br>
        绝对定位元素 也就是 position 为 absolute 和 fixed<br>
        行内快元素 display 为 inline-block<br>
        display 为 table-cell inline-block flex inline-flex grid inline-grid table-caption(表格标题)
        overflow 不为 visible
      </p>

      <body>
        <p>bfc margin flod </p>
        <div></div>
        <div></div>
      </body>
    </Show>
    <Show>
      <p>清除浮动</p>
      <div style="border: 1px solid #000;overflow: hidden">
        <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
      </div>
    </Show>
  </dev-layout>
</template>
<style scoped>
div {
  width: 100px;
  height: 100px;
  background: lightblue;
  margin: 100px;
}
</style>