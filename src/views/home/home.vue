<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box :hot-suggests="hotSuggests"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import homeSearchBox from './cpns/home-search-box.vue';

import hyRequest from "@/service/request/index"
import useHomeStore from '@/store/modules/home';
//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
//1.热门的建议
// const hotSuggests = ref([])
// hyRequest.get({
//   url: "/home/hotSuggests"
// }).then(res => {
//   hotSuggests.value = res.data
// })

//2.分类数据
// const categories = ref([])
// hyRequest.get({
//   url: "/home/categories"
// }).then(res => {
//   categories.value = res.data
// })

</script>
<style lang="less" scoped>
  .banner{
    img{
      width:100%;
    }
  }

</style>