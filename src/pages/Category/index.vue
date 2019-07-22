<template>
  <div id="category">
    <div class="wraper">
      <div class="header border-1px" >
        <div><span class="iconfont icon-fangdajing"></span>搜索商品, 共21799款好物</div>
      </div>
      <div class="body">
        <div class="bodyWraper">
          <div class="navWraper" ref="navScroll">
            <ul class="nav">
              <li v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :key="index">
                <span></span>
                <p>推荐专区</p>
              </li>
            </ul>
          </div>
          <div class="detail" ref="detailScroll">
            <div class="detailWraper">
              <img class="img" src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196"/>
              <ul v-for="(ulItem,index) in [[1,2,3,4],[1,2,3,4,5],[1,2,3,4,5]]" :key="index">
                <p class="title bottom-1px">好物精选</p>
                <li>
                  <div v-for="(item,index) in ulItem" :key="index">
                    <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144"/>
                    <p>员工精选好货</p>
                  </div>
                </li>
              </ul>
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
    mounted(){
      this.navScroll = new BScroll(this.$refs.navScroll,{
        click:true
      })
      this.detailScroll = new BScroll(this.$refs.detailScroll,{
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #category
    height 100%
    .wraper
      height 100%
      .header
        bottom-border-1px(#eee)
        height 88px
        padding 0 30px 
        text-align center 
        overflow hidden
        position relative
        div
          background #ededed
          margin 19px 
          line-height 50px
          font-size 28px
          border-radius 10px
      .body
        height 87%
        .bodyWraper
          height 100%
          display flex
          overflow hidden
          .navWraper
            height 100%
            width 162px
            .nav
              li
                display flex
                p
                  text-align center
                  height 50px
                  width 100%
                  line-height 50px
                  color #333
                  margin 20px 0
                span 
                  display inline-block
                  width 5px
                  height 50px
                  background #AB2B2B
                  margin 20px 0
        
          .detail
            box-sizing border-box
            height 100%
            width 100%
            margin-top 30px
            .detailWraper
              margin 0 auto
              width 528px
              .img 
                width 100%
              .title
                bottom-border-1px(#eee)
                line-height 50px
                height 50px
                font-size 28px
                color #333
                font-weight bold
                margin-top 30px
              ul
                li
                  display flex
                  flex-wrap wrap
                  div
                    width 144px
                    margin 0 15px
                    img 
                      width 144px
                      height 144px
                    p
                      font-size 24px
                      color #333                          
</style>
