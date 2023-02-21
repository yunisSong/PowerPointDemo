<template>
  <div class="container">
    <!-- menu -->
    <BGVue class="bg" />
    <FunnelView class="logo" @click="showMenu" ref="logo" />

    <div>
      <!-- <LottieView :path="path" /> -->
    </div>
    <Scene1 class="scene" ref="sceneRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LottieView from '@/components/LottieView'
import anime from 'animejs'
import BGVue from './BG.vue'
// import FunnelView from './FunnelView.vue'
import FunnelView from './FunnelView2.vue'

import Scene1 from './scene/Scene1.vue'

const path = 'https://assets3.lottiefiles.com/packages/lf20_3QnWBywaTr.json'
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

    sceneRef.value.showCharts()
  }

  // = {
  //   position: 'relative',
  //   width: '80px',
  //   height: '80px'
  // }
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
  top: calc(50% - 200px);
  width: var(--itemWidth);
  height: var(--itemWidth);
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
  background-color: antiquewhite;

  // transition: all 0.25s ease-in-out;
  transform: translateX(100%);
}
</style>
