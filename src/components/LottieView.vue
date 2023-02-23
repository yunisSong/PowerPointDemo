<template>
  <div ref="lottieBox"></div>
</template>

<script setup>
import lottie from 'lottie-web'
import { ref, toRefs, watchEffect, onMounted, defineProps } from 'vue'

const props = defineProps({
  animationData: {
    type: Object,
    default: () => {
      return {}
    }
  },
  path: {
    type: String,
    default: ''
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: true
  }
})

// const suspendFun = () => {
//   props.lottie.pause()
// }
// const startFun = () => {
//   props.lottie.play()
// }

const { animationData, path } = toRefs(props)

console.log('props.animationData', props.animationData)
const lottieBox = ref(null)
onMounted(() => {
  if (lottieBox.value) {
    lottie.destroy()

    const animation = lottie.loadAnimation({
      container: lottieBox.value,
      renderer: 'svg', // 渲染方式:svg：支持交互、不会失帧、canvas、html：支持3D，支持交互
      loop: props.loop, // 循环播放，默认：true
      autoplay: props.autoplay, // 自动播放 ，默认true
      // path: props.path, //网络路径
      animationData:
        Object.keys(props.animationData).length == 0 ? '' : props.animationData //本地路径，优先级更高
    })
  }
})
watchEffect(() => {
  if (lottieBox.value) {
    console.log('animationData.value', animationData.value)
    lottie.destroy()

    const animation = lottie.loadAnimation({
      container: lottieBox.value,
      renderer: 'svg', // 渲染方式:svg：支持交互、不会失帧、canvas、html：支持3D，支持交互
      loop: props.loop, // 循环播放，默认：true
      autoplay: props.autoplay, // 自动播放 ，默认true
      // path: path.value, //网络路径
      animationData:
        Object.keys(animationData.value).length == 0 ? '' : animationData.value //本地路径，优先级更高
    })
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
#lottie_box {
  width: 400px;
  height: 800px;
  margin: 0px auto;
}
</style>
