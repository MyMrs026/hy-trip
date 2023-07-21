import { ref, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore'

console.log(throttle);

export default function useScroll() {
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  
  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop  
    scrollHeight.value = document.documentElement.scrollHeight
    // console.log(document.documentElement.scrollTop);
    console.log("监听到滚动");
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("监听到底部");
      isReachBottom.value = true
    }
  },1000) 

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}