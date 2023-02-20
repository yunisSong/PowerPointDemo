<template>
  <div class="box">
    <template v-for="path in paths">
      <LottieView class="item" :path="path" />
    </template>
    <!-- <LottieView class="item" :animationData="animationData" /> -->
  </div>
</template>

<script setup>
import LottieView from '@/components/LottieView'
import animationData from '@/assets/animation.json' // 导出的动效json文件

const paths = [
  'https://assets2.lottiefiles.com/packages/lf20_fWd36IjnsR.json',
  'https://assets2.lottiefiles.com/packages/lf20_ZsO4t2Bow2.json',
  'https://assets4.lottiefiles.com/packages/lf20_yMpiqXia1k.json',
  'https://assets4.lottiefiles.com/packages/lf20_hcwpcdew.json',
  'https://assets1.lottiefiles.com/packages/lf20_bdlrkrqv.json',
  'https://assets2.lottiefiles.com/packages/lf20_k0sUtnckyH.json',
  'https://assets10.lottiefiles.com/packages/lf20_mKMcjgVTY6.json',
  'https://assets4.lottiefiles.com/packages/lf20_J6o1Hm9w1k.json',
  'https://assets3.lottiefiles.com/packages/lf20_yrelFtPfpX.json',
  'https://assets3.lottiefiles.com/packages/lf20_3QnWBywaTr.json',
  'https://assets10.lottiefiles.com/packages/lf20_O2ci8jA9QF.json',
  'https://assets3.lottiefiles.com/packages/lf20_6tQ2In419R.json',
  'https://assets7.lottiefiles.com/packages/lf20_w5IPa6MSf6.json',
  'https://assets7.lottiefiles.com/packages/lf20_VzkC2EHaun.json',
  'https://assets7.lottiefiles.com/packages/lf20_IpUIn3jxIE.json',
  'https://assets7.lottiefiles.com/packages/lf20_dza46uOON4.json',
  'https://assets9.lottiefiles.com/packages/lf20_2BAXUsgWW3.json',
  'https://assets6.lottiefiles.com/private_files/lf30_vuwn0sih.json',
  'https://assets1.lottiefiles.com/packages/lf20_jKO4EX9d7w.json',
  'https://assets9.lottiefiles.com/packages/lf20_lMdZ2NUeMB.json'
]
</script>

<style lang="scss" scoped>
.box {
  // width: 100%;
  margin: 40px 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  row-gap: 80px;
  padding-left: 40px;
  // background: linear-gradient(90deg, #fff, #000);
}
.item {
  width: 400px;
  height: 400px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease-in-out;
}
.item:hover {
  scale: 1.1;
  box-shadow: 25px 35px 20px rgba(0, 0, 0, 0.05),
    25px 30px 30px rgba(0, 0, 0, 0.05);
}
#lottie_box {
  width: 400px;
  height: 400px;
  margin: 0px auto;
}
</style>
