<template>
  <div id="person">
    <div class="wraper">
      <div class="header">
        <!-- search -->
        <div class="search border-1px">
          <span class="title iconfont icon-fangzi" ></span>
          <div>
            <span >网易严选</span>
          </div>
          <p>
            <span class="iconfont icon-fangdajing"></span>
            <span class="iconfont icon-gouwuche"></span>
          </p>
        </div>
      </div>
      <div class="body">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
        </div>
        <div class="bodyButton">
          <div class="bodyButtonWraper">
            <div class="login on">
              <span class="iconfont icon-shouji"></span>
              <span>手机号码登录</span>
            </div>
            <div class="login">
              <span class="iconfont icon-youxiang"></span>
              <span>邮箱账号登陆</span>
            </div>
            <p class="phone">手机号快捷注册》</p>
           
          </div>
        </div>
        <div class="footer">
          <div>
            <span class="iconfont icon-weixin"></span>
            <span>微信</span>
          </div>
          <p>|</p>
          <div>
            <span class="iconfont icon-tengxunqq"></span>
            <span>QQ</span>
          </div>
          <p>|</p>
          <div>
            <span class="iconfont icon-weibo"></span>
            <span>微博</span>
          </div>
        </div>
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

  #person
    .wraper
      .header
        height 100px
        width 100%
        background #fff
        position relative 
        z-index 2
        .search
          bottom-border-1px(#000)
          width 100%
          display flex
          padding 0 26px
          box-sizing border-box
          .title 
            font-size 46px
            line-height 100px
          div 
            width 70%
            height 100px
            line-height 100px
            overflow hidden
            text-align center
            span 
              display block
              height 100px
              line-height 100px
              color block 
              font-size 40px
              margin-left 90px
          p 
            width 160px
            line-height 100px
            height 100px
            display flex
            justify-content center
            span 
              text-align center
              display block
              width 50%
              font-size 46px
      .body
        width 100%
        height 100%
        background #F2F5F4
        .logo
          height 410px
          overflow hidden
          img 
            display block
            height 90px
            width 268px
            position relative
            top 50%
            left 50%
            transform translateX(-50%) translateY(-50%)
      .bodyButton
        height 292px
        .bodyButtonWraper
          height 292px
          width 670px
          margin 0 auto
          .login
            width 670px
            height 94px
            line-height 94px
            text-align center
            border 1px solid #666
            margin 10px 0
            span
              display inline-block
              font-size 32px
              margin 0 5px
            &.on
              background #B4282D
              color #fff
          .phone
            text-align center
            font-size 24px 
            margin-top 20px
      .footer
        margin-top 300px
        margin-bottom 300px
        display flex
        justify-content center
        div
          font-size 28px
          color #7F7F7F
          span 
            margin 0 5px
            vertical-align middle
        p
          margin 0 30px
          color #7F7F7F
          font-size 28px



</style>
