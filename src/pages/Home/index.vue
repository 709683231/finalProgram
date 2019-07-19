<template>
  <div id="home">
    <div class="header">
      <div class="search">
        <span class="title"></span>
        <div>
          <span></span>
          <span>搜索商品，共21769款好物</span>
        </div>
        <button>登录</button>
      </div>
      <div class="category">

      </div>
      <div class="scroll">

      </div>
      <div class="support">

      </div>
      <div class="list">

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
    width 100%
    height 100%
    overflow hidden
    .header
      width 100%
      .search
        width 100%
        height 88px
        display flex
        box-sizing border-box
        padding 15px 20px
        .title 
          width: 138px;
          height: 40px;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
          display: inline-block;
          margin-right: 20px;
          background-size: cover;
          background-position: center;
          margin-top 20px
          margin-left 10px
        div 
          width 442px
          height 56px
          box-sizing border-box
          padding 10px 20px
          background #ededed
          margin-top 18px
          span 
            color #666666
            font-size 30px
        button 
          font-size 20px
          border-radius 2px
          color red
          border 1px solid red


</style>
