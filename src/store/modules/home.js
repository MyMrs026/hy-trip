import { defineStore } from "pinia";
import hyRequest from "@/service/request/index"
import { getHomeHotSuggests,getHomeCategories,getHomeHouseList } from "@/service";

const useHomeStore = defineStore("home", {
  state: ()=>({
    hotSuggests: [],
    categories: [],

    currentPage:1,
    houselist:[]
  }),
  actions: {
    async fetchHotSuggestData(){
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchHomeCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore