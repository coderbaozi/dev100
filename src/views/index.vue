<script lang='ts' setup>
import Thefooter from "@/components/Thefooter.vue"
import Card from "@/components/Card/Card.vue"
import CardItem from "@/components/Card/CardItem.vue"
import { reactive } from "vue"

const dev100 = reactive<any[]>([
  {
    id:1,
    title:'Masonry Layouts',
    desc:'Practice of waterfall layout',
    path:''
  }
])

</script>

<template>
  <div class="home">
    <div class="logo">
      <img class='w-48 h-24' src="/dev100.png" alt="dev100" />
    </div>

    <div>
      <Card>
        <template v-for="item,index in dev100" :key="index">
          <CardItem :path="item.path" :id="item.id" :desc="item.desc" :title="item.title" />
        </template>
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