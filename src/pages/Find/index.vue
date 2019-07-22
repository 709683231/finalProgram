<template>
  <div id="find">
    <div class="wraper" >
      <div class="header">
        <!-- search -->
        <div class="search border-1px">
          <span class="title iconfont icon-fangzi" ></span>
          <div>
            <span class="on">甄选家</span>
            <span>发现</span>
          </div>
          <p>
            <span class="iconfont icon-fangdajing"></span>
            <span class="iconfont icon-gouwuche"></span>
          </p>
        </div>
        <!-- category -->
        <div class="category" >
          <div class="content" ref="headScroll">
            <ul>
              <li @click="lineShow(0)">推荐<div :class="{on:index===0}"></div></li>
              <li @click="lineShow(1)">居家生活<div :class="{on:index===1}"></div></li>
              <li @click="lineShow(2)">服装鞋包<div :class="{on:index===2}"></div></li>
              <li @click="lineShow(3)">美食酒水<div :class="{on:index===3}"></div></li>
              <li @click="lineShow(4)">个护清洁<div :class="{on:index===4}"></div></li>
              <li @click="lineShow(5)">母婴亲子<div :class="{on:index===5}"></div></li>
              <li @click="lineShow(6)">运动旅行<div :class="{on:index===6}"></div></li>
              <li @click="lineShow(7)">数码家电<div :class="{on:index===7}"></div></li>
              <li @click="lineShow(8)">全球特色<div :class="{on:index===8}"></div></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="body" ref="bodyScroll">
        <div class="bodyWraper" >
          <div class="bigImage">
            <img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376"/>
          </div>
          <div class="styleOne"> 
            <div class="wraper" v-for="(item,index) in [1,2]" :key="index">
              <div class="styleOneHeader">
                <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56"/>
                <span>选妹</span>
              </div>
              <p>夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
              <img class="wraperImage" src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376"/>
              <div class="wraperNum">
                <span class="iconfont icon-yj"></span>
                <span>6579人看过</span>
              </div>
            </div>
          </div>
          <div class="styleTwo" v-for="(item,index) in [1,2]" :key="index"> 
            <div class="wraper">
              <div class="styleOneHeader">
                <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56"/>
                <span>选妹</span>
              </div>
              <p>夏凉用品购置指南，凉席、空调被</p>
              <span class="wraperContent">六种风格，一盒尽享</span>
              <div class="wraperNum">
                <span class="iconfont icon-yj"></span>
                <span>6579人看过</span>
              </div>
            </div >
            <div class="rightImage" >
              <img src="https://yanxuan.nosdn.127.net/e90cef1231f016f3db49360530461e38.jpg?imageView&quality=65&thumbnail=272y272"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        index : 0
      }
    },
    mounted(){
      this.headScroll = new BScroll(this.$refs.headScroll,{
        click:true,
        scrollY:false,
        scrollX:true
      }),
      this.headScroll = new BScroll(this.$refs.bodyScroll,{
        click:true,
        scrollY:true,
        scrollX:false
      })
    },
    methods:{
      lineShow(index){
        this.index = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #find
    height 100%
    width:100%
    .wraper
      height 100%
      background #eee
      width 100%
      overflow hidden
      .header
        height 192px
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
            width 65%
            height 100px
            line-height 100px
            overflow hidden
            span 
              float right
              height 100px
              line-height 100px
              display inline-block
              color #666666
              font-size 28px
              margin-right 50px
              &.on
                color #B4282D
                font-size 40px
                font-weight bold
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
        .category
          height 72px
          width 100%
          background #fff
          .content
            width 750px
            display flex
            ul
              display flex
              white-space nowrap
              li
                text-align center
                font-size 30px
                line-height 72px
                display inline-block
                margin 0 25px
                box-sizing border-box
                div
                  width 100%
                  border-bottom 6px solid #b4282d
                  opacity 0
                  transform translateY(-6px)
                .on
                  opacity 1

      .body
        height 100%
        .bodyWraper
          width 100%
          margin-bottom 98px
          .bigImage
            background #fff
            img 
              width 690px
              display block
              margin 0 auto 
              padding-bottom 30px
          .styleOne
            width 100%
            margin-top 30px
            background #fff
            .wraper
              width 690px
              margin 15px auto
              background #fff
              .styleOneHeader
                img 
                  height 54px
                  width 54px
                  border-radius 50%
                  margin-right 15px
                  vertical-align middle
                span 
                  height 54px
                  line-height 54px
                  display inline-block
              p
                color #333
                font-size 36px
                margin 16px 0 
                line-height 56px
              .wraperImage
                width 100%
              .wraperNum
                span
                  color #999
                  display inline-block
                  margin 10px 
          .styleTwo
            width 100%
            margin-top 30px
            background #fff
            display flex
            .wraper
              width 400px
              margin 15px auto
              background #fff
              .styleOneHeader
                img 
                  height 54px
                  width 54px
                  border-radius 50%
                  margin-right 15px
                  vertical-align middle
                span 
                  height 54px
                  line-height 54px
                  display inline-block
              p
                color #333
                font-size 36px
                margin 16px 0 
                line-height 56px
              .wraperNum
                span
                  color #999
                  display inline-block
                  margin 10px 
              .wraperContent
                font-size 24px
                color #999
            .rightImage
              height 100%
              width 300px
              margin auto
              img 
                width 272px
                height 272px
                display block
      
      
    
</style>
