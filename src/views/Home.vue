<template>
  <div class="container">
    <!-- menu -->
    <BGVue class="bg" />
    <div class="logo" @click="showMenu" ref="logo">
      <LottieView :path="path" />
    </div>
    <Scene1 class="scene" ref="sceneRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LottieView from '@/components/LottieView'
import anime from 'animejs'
import BGVue from './BG.vue'
import Scene1 from './scene/Scene1.vue'

const path = 'https://assets3.lottiefiles.com/packages/lf20_3QnWBywaTr.json'
const logo = ref(null)
const sceneRef = ref(null)
const showMenu = () => {
  console.log('2222')

  logo.value.style.position = 'relative'
  console.log(' sceneRef.value', sceneRef.value)
  console.log(' sceneRef', sceneRef)

  // sceneRef.value.style.transform = 'scale(0.1)'
  // sceneRef.value.style.opacity = 0.1
  // screenRef.value.style.transform = `scale(${scale.width}, ${scale.height})`;

  var tl = anime
    .timeline({
      easing: 'easeOutQuad',
      duration: 500
    })
    .add({
      targets: '.logo',
      left: 0,
      top: 200,
      width: 100,
      height: 100,
      borderRadius: '50%'
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
      '+=1500'
    )

  sceneRef.value.showCharts()

  // tl.add

  // .add(
  //   {
  //     targets: '.logo',
  //     width: 100,
  //     height: 100
  //     // rotate: {
  //     //   value: 360,
  //     //   duration: 400,
  //     //   easing: 'easeOutQuad'
  //     // }
  //   },
  //   '-=400'
  // )

  anime({
    targets: '.morphing-demo .polymorph',
    points: [
      {
        value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
        ]
      },
      {
        value:
          '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369'
      },
      {
        value:
          '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'
      },
      {
        value:
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369'
      }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  })

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
:root {
  --itemWidth: 400px;
}
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
}
.logo {
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  // width: var(--itemWidth);
  // height: var(--itemWidth);
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

  transition: all 0.25s ease-in-out;
  transform: translateX(100%);
}
</style>
