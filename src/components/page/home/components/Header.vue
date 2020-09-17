<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-middle">
      <input type="text" class="header-input" :placeholder='"\ue632"+" 输入城市/景点/游玩主题"' />
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{'上海'}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
};
</script>
<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .header
      a
        font-size 12px
      display:flex
      line-height:$headerHeight
      background:$bgColor
      color:#fff
      .header-left
        width  .64rem
        float left
        text-align center
        .back-icon
            font-size .4rem
      .header-middle
        flex 1
        height .64rem
        line-height.64rem
        .header-input
            -web-kit-appearance:none;
            -moz-appearance: none;
            height .64rem
            margin-top .12rem
            margin-left .2rem
            border-radius .1rem
            width:calc(100% - .2rem);
            display:inline-block;  
            border 1px solid #cccccc
            padding-left 10px  //调节指针光标的位置
            &:hover
              border 1px solid blue
            &:focus
              border 1px solid red
      .header-right
        min-width 1.04rem
        float right
        padding  0 .1rem
        color #fff
        text-align center
        .arrow-icon
            margin-left  -.04rem
            font-size .24rem
            
    input::-webkit-input-placeholder{
    color: #ccc;
    font-size:14px
    padding-left:10px
}
</style>