<template>
  <div class="swiper">
    <slide-show :slideList="swiperList"></slide-show>
  </div>
</template>

<script>
import slideShow from "common/slideSwiper";

export default {
  name: "Swiper",
  data() {
    return {
    };
  },
  props: {
    swiperList: {
        type:Array,
        default () {
            return []
        }
    },
  },
  components: {
    slideShow,
  },
};
</script>

<style lang="stylus" scoped></style>