<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <router-link to="">
      <img
        class="weekend-img"
        src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg"
        alt=""
      />
      <div class="weekend-info">
        <p class="weekend-name">北京温泉排行榜</p>
        <p class="weekend-desc">细数北京温泉，温暖你的冬天</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Weekend",
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.weekend-title {
  title();
  .weekend-img{
      width 100%
  }
}
</style>