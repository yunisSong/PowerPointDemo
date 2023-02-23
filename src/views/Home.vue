<template>
  <div class="container">
    <!-- menu -->
    <BGVue class="bg" />
    <!--       @click="showMenu"
 -->
    <div class="logo">
      <FunnelBG class="svgbg" />

      <FunnelView class="logoItem" ref="logo" @showTags="showTags" />
    </div>

    <div>
      <!-- <LottieView :path="path" /> -->
    </div>
    <Scene1
      class="scene"
      ref="sceneRef"
      :path="path"
      :animationData="animationData"
      :title="title"
      :content="content"
      @showMenus="showMenu"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LottieView from '@/components/LottieView'
import anime from 'animejs'
import BGVue from './BG.vue'
import FunnelView from './FunnelView.vue'
import FunnelBG from './FunnelBG.vue'
import animationData_1 from '@/assets/animation.json' // 导出的动效json文件
import animationData_2 from '@/assets/成本增加.json' // 导出的动效json文件
import animationData_3 from '@/assets/成本增加1.json' // 导出的动效json文件
import animationData_4 from '@/assets/没有边界小球乱撞.json' // 导出的动效json文件
import animationData_5 from '@/assets/踢皮球.json' // 导出的动效json文件
import animationData_6 from '@/assets/图标上升.json' // 导出的动效json文件
import animationData_7 from '@/assets/decision.json' // 导出的动效json文件
import animationData_8 from '@/assets/Rules.json' // 导出的动效json文件
import animationData_9 from '@/assets/check.json' // 导出的动效json文件
import animationData_10 from '@/assets/control.json' // 导出的动效json文件
import animationData_11 from '@/assets/delivery.json' // 导出的动效json文件
import animationData_12 from '@/assets/project.json' // 导出的动效json文件
import animationData_13 from '@/assets/transaction.json' // 导出的动效json文件

// import FunnelView from './FunnelView2.vue'

// import Scene1 from './scene/Scene1.vue'
import Scene1 from './scene/BaseSence.vue'

const path = 'https://assets3.lottiefiles.com/packages/lf20_3QnWBywaTr.json'
const animationData = ref(animationData_1)
const title = ref('测试标题')
const content =
  '这段文字是这个标题以及动效的描述，这段文字是这个标题以及动效的描述，这段文字是这个标题以及动效的描述，这段文字是这个标题以及动效的描述，这段文字是这个标题以及动效的描述，这段文字是这个标题以及动效的描述，'
const logo = ref(null)
const sceneRef = ref(null)
const showFunnel = ref(true)

const removeAnimation = (animation) => {
  animation.remove('.logo .bg .scene')
}
const showMenu = () => {
  showFunnel.value = !showFunnel.value
  const show = showFunnel.value
  if (show) {
    //显示脱落

    anime
      .timeline({
        easing: 'easeOutQuad',
        duration: 500,
        complete: function (anim) {
          // logo.value.style.left = 'calc(50% - 200px)'
          removeAnimation(anim)
        }
      })

      .add({
        targets: '.logo',
        left: 'calc(50% - 200px)',
        duration: 500
      })
      .add(
        {
          targets: '.bg',
          rotate: 0,
          scale: 1
        },
        '-=500'
      )
      .add(
        {
          targets: '.scene',
          scale: 1,
          opacity: '0',
          translateX: '100%',
          duration: 1350
        },
        '-=300'
      )
  } else {
    // logo.value.style.position = 'relative'

    anime
      .timeline({
        easing: 'easeInQuad',
        duration: 500,
        complete: function (anim) {
          // logo.value.style.left = '0'

          removeAnimation(anim)
        }
      })
      .add({
        targets: '.logo',
        left: 0,
        duration: 500
      })
      .add(
        {
          targets: '.bg',
          rotate: 45,
          scale: 2
        },
        '-=500'
      )
      .add(
        {
          targets: '.scene',
          scale: 1,
          opacity: 1,
          translateX: 0,
          duration: 1350
        },
        '-=300'
      )

    // sceneRef.value.showCharts()
  }

  // = {
  //   position: 'relative',
  //   width: '80px',
  //   height: '80px'
  // }
}
const changeData = (name) => {
  switch (name) {
    case '度量决策':
      animationData.value = animationData_7
      break

    case '体系规范':
      animationData.value = animationData_8
      break

    case '质量控制':
      animationData.value = animationData_10
      break
    case '专业交付':
      animationData.value = animationData_11
      break
    case '运营支撑':
      animationData.value = animationData_9
      break
    case '项目':
      animationData.value = animationData_12
      break

    default:
      break
  }
}
const showTags = (tag) => {
  title.value = tag
  changeData(tag)
  const show = showFunnel.value
  if (show) {
    showMenu()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  .menu {
    width: 100px;
    background-color: white;
  }
  .content {
    flex: 1;
    background-color: burlywood;
  }
}

.bg {
  position: fixed;
  width: 100%;
  height: 100%;
}
.logo {
  --itemWidth: 400px;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 400px);
  width: var(--itemWidth);
  height: 600px;
  background-color: transparent;
  overflow: hidden;
  z-index: 10000000;
  // width: 100%;
  // height: 100vh;
  // transition: all 0.5s ease-in-out;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.svgbg {
  left: 0;
  top: 0;
  width: 400px;
  height: 600px;
  position: absolute;
}
.logoItem {
  margin-top: 240px;
}
/*

#9DC8C8
#58C9B9
#519D9E
#D1B6E1

*/

.scene {
  margin-left: 200px;
  height: 100%;
  width: calc(100% - 200px);
  // background-color: transparent;
  background-color: #ccffff;

  // transition: all 0.25s ease-in-out;
  transform: translateX(100%);
}
</style>
