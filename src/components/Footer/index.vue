<template>
  <div id="footer" class="border-1px">
    <div class="footerUl">
      <div  @click="$router.replace('/home')" :class="{on:$route.path==='/home'}">
        <span class="iconfont icon-fangzi"></span>
        <span class="footerFont">首页</span>
      </div>
      <div @click="$router.replace('/category')" :class="{on:$route.path==='/category'}">
        <span class="iconfont icon-yigui"></span>
        <span class="footerFont">分类</span>
      </div>
      <div @click="$router.replace('/find')" :class="{on:$route.path==='/find'}">
        <span class="iconfont icon-zhaopian"></span>
        <span class="footerFont">识物</span>
      </div>
      <div @click="$router.replace('/shop')" :class="{on:$route.path==='/shop'}">
        <span class="iconfont icon-gouwuche"></span>
        <span class="footerFont">购物车</span>
      </div>
      <div @click="$router.replace('/person')" :class="{on:$route.path==='/person'}">
        <span class="iconfont icon-person"></span>
        <span class="footerFont">个人</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  #footer
    top-border-1px(#666)
    position fixed
    left 0
    right 0
    bottom 0
    width 750px
    height 98px
    background white
    .footerUl
      display flex
      color #666
      div
        box-sizing border-box
        padding-top 10px
        height 98px
        display flex
        flex-direction column
        align-items center
        margin auto 0
        width 25%
        span
          font-weight bolder
          text-align center
        .iconfont
          font-size 40px
        .footerFont
          font-size 24px
          margin-top 7px
      .on
        color #b4282d



</style>
