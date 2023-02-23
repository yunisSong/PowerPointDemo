<template>
  <div class="baseSence" @click="show">
    <!-- <BGVue class="bg" /> -->
    <!-- <LottieView class="bg" :path="path" :animationData="animationData" /> -->
    <button class="backButton" @click="back">返回</button>
    <div class="gif">
      <LottieView :path="path" :animationData="animationData" />
    </div>
    <div class="description" ref="descriptionRef">
      <div class="center">
        <div class="title" ref="titleRef">{{ title }}</div>
        <div class="content" ref="contentRef">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, watchEffect, watch } from 'vue'
import anime from 'animejs'

import LottieView from '@/components/LottieView'
import BGVue from '../BG.vue'
import animationData_1 from '@/assets/animation.json' // 导出的动效json文件
import animationData_2 from '@/assets/成本增加.json' // 导出的动效json文件
import animationData_3 from '@/assets/成本增加1.json' // 导出的动效json文件
import animationData_4 from '@/assets/没有边界小球乱撞.json' // 导出的动效json文件
import animationData_5 from '@/assets/踢皮球.json' // 导出的动效json文件
import animationData_6 from '@/assets/图标上升.json' // 导出的动效json文件

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
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})
const { animationData, title, content } = toRefs(props)

animationData.value = animationData_1

const descriptionRef = ref(null)
const titleRef = ref(null)
const contentRef = ref(null)
const removeAnimation = (animation) => {
  animation.remove('.description .title .content')
}
const show = () => {
  // descriptionRef.value.style.opacity = '1'
  anime
    .timeline({
      easing: 'easeOutQuad',
      duration: 1350,
      complete: function (anim) {
        // logo.value.style.left = 'calc(50% - 200px)'
        removeAnimation(anim)
      }
    })

    .add({
      targets: '.description',
      opacity: '1',
      duration: 500
    })
    .add(
      {
        targets: '.title',
        translateY: -90,
        opacity: 1,
        duration: 700
      },
      '-=400'
    )
    .add(
      {
        targets: '.content',
        translateY: -80,
        opacity: 1,
        duration: 700
      },
      '-=300'
    )
}
const hidden = () => {
  if (descriptionRef.value) {
    descriptionRef.value.style.opacity = 0
    titleRef.value.style.opacity = 0
    contentRef.value.style.opacity = 0

    titleRef.value.style.transform = 'translateY(100px)'
    contentRef.value.style.transform = 'translateY(100px)'
  }
}

const changeData = (name) => {
  switch (name) {
    case '度量决策':
      animationData.value = animationData_1
      break

    case '体系规范':
      animationData.value = animationData_2
      break

    case '质量控制':
      animationData.value = animationData_3
      break
    case '专业交付':
      animationData.value = animationData_4
      break
    case '项目':
      animationData.value = animationData_5
      break

    default:
      break
  }
}
// watchEffect(() => {
//   console.log('title value', title.value)
//   const name = title.value
//   changeData(name)
//   hidden()
//   show()
// })
watch(title, (newValue, oldValue) => {
  console.log('值发生了变更', newValue, oldValue)
  // const name = title.value
  // changeData(newValue)
  hidden()
  show()
})
const emits = defineEmits(['showMenus'])

const back = () => {
  emits('showMenus', {})
}
</script>

<style lang="scss" scoped>
.baseSence {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.backButton {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #58c9b9;
  color: #fff;
  width: 60px;
  height: 36px;
  border: none;
  font-size: 16px;
  border-radius: 4px;
}
/*


#9DC8C8
#58C9B9
#519D9E
#D1B6E1


*/
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
}
.gif {
  width: 300px;
  margin-top: 25px;
}
.description {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.35s linear;
  opacity: 0;
  .center {
    width: 60%;
  }
  .title {
    font-size: 36px;
    font-weight: 600;
    transform: translateY(100px);
  }
  .content {
    font-size: 20px;
    font-weight: 400;
    transform: translateY(100px);
    text-align: left;
    line-height: 35px;
  }
}
</style>
