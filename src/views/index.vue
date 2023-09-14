<script lang='ts' setup>
import Thefooter from '@/components/Thefooter.vue'
import Card from '@/components/Card/Card.vue'
import CardItem from '@/components/Card/CardItem.vue'

let id = 0
const cards = [{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'Waterfall layout',
  path: '/dev100/waterfall',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'lazy loading',
  path: '/dev100/lazyLoading',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'debounce.js',
  path: '/dev100/debounce',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'throttle.js',
  path: '/dev100/throttle',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'bfc',
  path: '/dev100/bfc',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'HolGrail',
  path: '/dev100/holyGrail',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'prototype',
  path: '/dev100/prototype',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'new operation',
  path: '/dev100/new',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'flat',
  path: '/dev100/flat',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'Message',
  path: '/dev100/IMessage',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'Congratulate',
  path: '/dev100/Congratulate',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'VirtualList',
  path: '/dev100/VirtualList',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'InfiniteScroll',
  path: '/dev100/InfiniteScroll',
},
{
  id: `DEV${(id++).toString().padStart(3, '0')}`,
  title: 'sse',
  path: '/dev100/sse',
},
]
</script>

<template>
  <div class="home">
    <div class="logo">
      <img class="w-48 h-24" src="/dev100.png" alt="dev100">
    </div>

    <div class="flex justify-center flex-wrap">
      <Card>
        <template v-for="card of cards" :key="card.id">
          <CardItem :id="card.id" :title="card.title" :path="card.path" />
        </template>
      </Card>
    </div>
    <Thefooter />
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
