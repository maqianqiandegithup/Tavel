<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-box">
      <transition  name="slide-trans">
        <img v-if="isShow" :src="slideList[nowIndex].imgUrl" alt  />
      </transition>
      <transition  name="slide-trans-old">
        <img v-if="!isShow" :src="slideList[nowIndex].imgUrl" alt/>
      </transition>
    </div>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "slideSwiper",
  data() {
    return {
      nowIndex: 0,
      isShow: true,
      invId: null,
    };
  },
  props: {
    slideList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    nextIndex() {
      return this.nowIndex === this.slideList.length - 1
        ? 0
        : this.nowIndex + 1;
    },
    preIndex() {
      return this.nowIndex === 0
        ? this.slideList.length - 1
        : this.nowIndex - 1;
    },
  },
  mounted() {
    this.runInv();
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.nowIndex = index;
        this.isShow = true;
      }, 10);
    },
    runInv() {
      console.log(this.slideList);
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, 3000);
    },
    clearInv() {
      clearInterval(this.invId);
    },
  },
};
</script>
<style lang="stylus" scoped>
.slide-show {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  .slide-box img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
}

.slide-trans-enter-active {
  transition: all 0.5s;
}

.slide-trans-enter {
  transform: translateX(700px);
}

.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-700px);
}
</style>
    
