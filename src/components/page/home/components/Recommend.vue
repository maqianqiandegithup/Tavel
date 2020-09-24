<template>
  <div class="recommend">
    <div class="recommend_title">
      <p>热销推荐</p>
    </div>
    <div class="recommend_body">
      <router-link
        class="item"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-name">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-but">查看详情</button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props: {
    list: Array,
  },
  mounted() {
    console.log(this.list);
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommend_title {
  title()
}

.item {
  height: 1.9rem;
  display: flex;

  .item-img {
    height: 1.7rem;
    width: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;

    .item-name {
      font-size: 0.32rem;
      line-height: 0.54rem;
      color: #000;
      ellipsis()
    }

    .item-desc {
      line-height: 0.4rem;
      color: #cccccc;
      ellipsis()
    }

    .item-but {
      background: #ff9300;
      color: #ffffff;
      border-radius: 0.06rem;
      margin-top: 0.16rem;
      line-height: 0.44rem;
      padding: 0 0.2rem;
    }
  }
}
</style>
    
