<template>
  <dev-layout>
    <div class="container">
      <div class="center">
        center
      </div>
      <div class="left">
        left
      </div>
      <div class="right">
        right
      </div>
    </div>
  </dev-layout>
</template>

<style scoped>
.container {
  min-width: 200px;
  height: 100vh;
  padding: 0 100px 0 200px;
  background-color: rgba(0, 255, 255, 0.3);
}

.left,
.center,
.right {
  float: left;
  height: 100px;
}

.center {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.left {
  position: relative;
  margin-left: -100%;
  left: -200px;
  width: 200px;
  background-color: rgba(255, 0, 0, 0.3);
}

.right {
  margin-right: -100%;
  /* 7. 设置一个负自己宽度的margin-right。让其去最右边 */
  width: 100px;
  background-color: rgba(0, 0, 255, 0.3);
}
</style>
