<template >
  <div>
    <home-header></home-header>
    <swiper :swiperList="swiperList"></swiper>
    <recommend :list="recommendList"></recommend>
    <weekend></weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import Swiper from "./components/Swiper"
import Recommend from "./components/Recommend"
import Weekend from "./components/Weekend"
import index from "static/mock/index";
export default {
  name: "Home",
  components: {
    HomeHeader,
    Swiper,
    Recommend,
    Weekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted(){
     this.getHomeInfo()
  },
  methods: {
    getHomeInfo() {
      let res = index;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        typeof this.swiperList
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
};
</script>