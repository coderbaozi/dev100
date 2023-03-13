<script lang='ts' setup>
import Thefooter from "@/components/Thefooter.vue"
import Card from "@/components/Card/Card.vue"
import CardItem from "@/components/Card/CardItem.vue"

</script>

<template>
  <div class="home">

    <div class="logo">
      <img class='w-48 h-24' src="/dev100.png" alt="dev100" />
    </div>

    <div class="flex justify-center flex-wrap">
      <Card>
          <CardItem id="DEV001" title="Waterfall layout" path="/dev100/waterfall"/>
          <CardItem id="DEV002" title="lazy loading" path="#" />
          <CardItem id="DEV003" title="none" path="'/'"/>
          <CardItem id="DEV004" title="hello github" path="'/'" />
      </Card>
    </div>

    <Thefooter/>
  </div>
</template>

<style scoped>
.home {
  max-width: 58rem;
  margin: 0 auto;
  text-align: center;
  padding: 32px 16px;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header {
  font-family: BulletproofItalic;
}
</style>