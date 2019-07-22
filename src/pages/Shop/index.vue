<template>
  <div id="btnSearch">
    <div class="wraper">
      <div class="header">
        <div class="headerInput">
          <span class="iconfont icon-fangdajing"></span>
          <input placeholder="单手1秒开合水杯"/>
        </div>
        <div class="cancel">取消</div>
      </div>
      <div class="body">
        <div class="bodyWraper">
          <h2>热门搜索</h2>
          <ul>
            <li v-for="(item,index) in [1,2,3,4,5]" :key="index">夏凉被82折起</li>
          </ul>
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
  #btnSearch
    background #eeeeee
    width 100%
    height 100%
    .wraper
      .header
        display flex
        height 88px
        box-sizing border-box
        padding 0 30px
        background #fff
        .headerInput
          margin-top 16px
          width 604px
          height 56px
          line-height 88px
          font-size 36px
          background #eee
          span  
            font-size 36px
            background #eee
        .cancel
          height 88px
          line-height 88px
          margin-left 20px
          font-size 28px
      .body
        background #fff
        .bodyWraper
          h2
            font-size 30px
            color #999
            padding 10px 0
            text-indent 20px
          ul
            width 100%
            overflow hidden
            li
              margin 10px 15px
              float left
              font-size 24px
              border 1px solid #999
              display inline-block
              padding 10px 20px
              color #999
              border-radius 10px


</style>
