<template>
  <div id="home" >
    <!-- header -->
    <div class="header">
      <!-- search -->
      <div class="search">
        <span class="title"></span>
        <div>
          <span class="iconfont icon-fangdajing"></span>
          <span>搜索商品，共21769款好物</span>
        </div>
        <p>登录</p>
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
        <div class="btn" @click="toggle">
          <span class="iconfont icon-xiajiantou" :class="{toUp:!down}" ></span>
        </div>
      </div>
    </div>
    <div class="wraper" ref="myScroll">
      <div class="contentWraper">
        <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3d087e9e13b33629355a9163e9d13ae7.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/5a8fdfaa42b384309a0e7425305fabed.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3a5a525079308bab4e34282188cc5ef3.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/3d087e9e13b33629355a9163e9d13ae7.jpg?imageView&quality=75&thumbnail=750x0">
              </div>
            </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

        <!-- support -->
        <div class="support">
          <div class="wraper">
            <div><span class="iconfont icon-yi"></span>网易自营品牌</div>
            <div class="active"><span class="iconfont icon-baozhang"></span>30天无忧退货</div>
            <div><span class="iconfont icon-jiaoyi"></span>48小时快速退款</div>
          </div>
        </div>
        <!-- list -->
        <div class="list">
          <ul>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
            <li>
              <div>
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
                <span>居家</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- img -->
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" class="img"/>
      
        <!-- 新人专享礼 -->
        <div class="newPerson">
          <div class="header">
            <span></span>
            <span class="content">新人专享礼</span>
            <span></span>
          </div>
          <div class="bodys">
            <div class="bodyLeft">
              <h2>新人专享礼包</h2>
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
            </div>
            <div class="bodyRight">
              <div class="top">
                <p>福利社</p>
                <span>今日特价</span>
                <img src="https://yanxuan.nosdn.127.net/03faa79c841e439c9aeb645977f4f8f7.png?imageView&thumbnail=200x200&quality=75"/>
              </div>
              <div class="bottom">
                <p>新人拼团</p>
                <span>一元起包邮</span>
                <img src="https://yanxuan.nosdn.127.net/8cab8087306ee26d8ef22cf91e8ebaf9.png?imageView&thumbnail=200x200&quality=75"/>
              </div>
            </div>
          </div>
        </div>
        <!--品牌制造商直供-->
        <section class="hasFourList">
          <div class="content">
            <div class="title">
              品牌制造商直供
            </div>
            <div class="titleRight">
              更多<span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
          <ul>
            <li >
              <p class="big">海外制造商</p>
              <p class="small">9.9元起</p>
              <div>
                <img src="//yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"/>
              </div>
            </li>
            <li >
              <p class="big">海外制造商</p>
              <p class="small">9.9元起</p>
              <div>
                <img src="//yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"/>
              </div>
            </li>
            <li >
              <p class="big">海外制造商</p>
              <p class="small">9.9元起</p>
              <div>
                <img src="//yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"/>
              </div>
            </li>
            <li >
              <p class="big">海外制造商</p>
              <p class="small">9.9元起</p>
              <div>
                <img src="//yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"/>
              </div>
            </li>
          </ul>
        </section>
        <!-- 类目热销榜 -->
        <section class="hotSall">
          <div class="content">
            <div class="title">
              类目热销榜
            </div>
          </div>
          <ul class="top">
            <li >
              <div class="contentLeft">
                <p class="big">热销榜</p>
                <p class="small"></p>
              </div>
              <div>
                <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200"/>
              </div>
            </li>
            <li >
              <div class="contentLeft">
                <p class="big">热销榜</p>
                <p class="small"></p>
              </div>
              <div>
                <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200"/>
              </div>
            </li>

          </ul>
          <ul class="bottom">
            <li v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index">
              <p class="small">居家生活榜</p>
              <div>
                <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
              </div>
            </li>
            
          </ul>
        </section>
        <!-- 人气推荐 -->
        <section class="hot">
          <div class="content">
            <div class="title">
              人气推荐
            </div>
            <div class="titleTop">
              <img src="https://yanxuan.nosdn.127.net/bb032dd258a8b8c638f0cd8af92202e3.png?imageView&quality=65&thumbnail=280x280"/>
              <div class="titleTopWraper">
                <div>
                  <p class="top">好货内部价</p>
                  <p class="big">超冷感吸放湿双面夏凉被 可机洗</p>
                  <p class="small">冷感+亲肤，享受双面睡感</p>
                  <p class="bottom">￥155</p>
                </div>
              </div>
            </div>
            <div class="titleRight">
              更多<span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
          <ul >
            <li v-for="(item,index) in [1,2,3]" :key="index">
              <div>
                <img src="https://yanxuan.nosdn.127.net/ecee79b50e2364ec4abbae6c26a983a4.png?imageView&quality=65&thumbnail=330x330"/>
              </div>
              <p class="big">无损风味 超即溶精品咖啡<span>￥155</span></p>
              <p class="small"><span>特价</span></p>
            </li>
          </ul>
        </section>
        <!-- 限时购 -->
        <section class="limit">
          <div class="content">
            <div class="title">
              限时购
              <span>00</span>:
              <span>00</span>:
              <span>00</span>
            </div>
            <div class="titleRight">
              更多<span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
          <ul >
            <li v-for="(item,index) in [1,2,3,4,5,6]" :key="index">
              <div>
                <img src="https://yanxuan.nosdn.127.net/736910b062c81b336a0418062a80bc5c.png?imageView&thumbnail=216x216&quality=75"/>
              </div>
              <p class="big">￥1869</p>
              <p class="small">￥1869 <span></span></p>
            </li>
          </ul>
        </section>
        <!-- 新品首发 -->
        <section class="firstSall">
          <div class="content">
            <div class="title">
              新品首发
            </div>
            <div class="titleRight">
              更多<span class="iconfont icon-youjiantou"></span>
            </div>
          </div>
          <ul >
            <li v-for="(item,index) in [1,2,3,4,5,6]" :key="index">
              <div>
                <img src="https://yanxuan.nosdn.127.net/ecee79b50e2364ec4abbae6c26a983a4.png?imageView&quality=65&thumbnail=330x330"/>
              </div>
              <p class="big">无损风味 超即溶精品咖啡<span>￥155</span></p>
              <p class="small"><span>特价</span></p>
            </li>
          </ul>
        </section>
        <!-- 四个图 -->
        <section class="fourPage">
          <ul>
            <li v-for="(item,index) in [1,2,3,4]" :key="index">
              <p class="big">1元秒杀抄底</p>
              <p class="small">200+好货不止5折</p>
              <div>
                <img src="https://yanxuan.nosdn.127.net/cc814c4063600d56ddf9d654763e9c0a.png?imageView&thumbnail=150x150&quality=75"/>
                <img src="https://yanxuan.nosdn.127.net/cc814c4063600d56ddf9d654763e9c0a.png?imageView&thumbnail=150x150&quality=75"/>
              </div>
            </li>
          </ul>
        </section>
        <!-- 夏日洗护空瓶记 -->
        <div class="summer">
          <img src="//yanxuan.nosdn.127.net/a415cf841405c9c5e14e435d8c57408b.jpg?imageView&thumbnail=750x0&quality=75"/>
          <div class="summerWraper">
            <ul >
              <li v-for="(item,index) in [1,2,3,4,5,6]" :key="index">
                <div>
                  <img src="https://yanxuan.nosdn.127.net/ecee79b50e2364ec4abbae6c26a983a4.png?imageView&quality=65&thumbnail=330x330"/>
                </div>
                <p class="big">无损风味 超即溶精品咖啡<span>￥155</span></p>
                <p class="small"><span>特价</span></p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 夏日日用翻新 -->
        <div class="summerSecond">
          <img src="//yanxuan.nosdn.127.net/dc972eece406987cbdd29f8849055d45.jpg?imageView&thumbnail=750x0&quality=75"/>
          <div class="summerWraper">
            <ul >
              <li v-for="(item,index) in [1,2,3,4,5,6]" :key="index">
                <div>
                  <img src="https://yanxuan.nosdn.127.net/ecee79b50e2364ec4abbae6c26a983a4.png?imageView&quality=65&thumbnail=330x330"/>
                </div>
                <p class="big">无损风味 超即溶精品咖啡<span>￥155</span></p>
                <p class="small"><span>特价</span></p>
              </li>
            </ul>
          </div>
        </div>
        <!-- footer -->
        <div class="footer">
          <div class="btn">
            <p><span>下载APP</span></p>
            <p><span>电脑板</span></p>
          </div>
          <p>网易公司版权所有 © 1997-2019</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        index:0,
        down:true
      }
    },

    methods:{
      lineShow(index){
        this.index = index
      },
      toggle(){
        this.down = !this.down
      }
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        //autoplay : { // 自动轮播
          //delay:3000
        //},
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        type: 'custom',

        renderCustom: function (swiper, current, total) {
              var customPaginationHtml = "";
              for(var i = 0; i < total; i++) {
                  //判断哪个分页器此刻应该被激活
                  if(i == (current - 1)) {
                      customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                  } else {
                      customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                  }
              }
              return customPaginationHtml;
          }
      }
      })


      this.$nextTick(()=>{
        //添加主体滑动
        if(!this.myScroll){
          this.myScroll =  new BScroll(this.$refs.myScroll,{
            click:true,
            scrollX: false,
            scrollY: true,
          })
        }else{
          this.myScroll.refresh()
        }
        //添加导航滑动
        if(!this.headScroll){
          this.headScroll =  new BScroll(this.$refs.headScroll,{
            click:true,
            scrollX: true,
            scrollY: false,
          })
        }else{
          this.myScroll.refresh()
        }
      })

    },
    destroyed(){
      this.myScroll = null
      this.headScroll = null
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  

  #home
    width 100%
    height 93%
    overflow hidden
    .header
      width 100%
      position relative 
      z-index 2
      .search
        width 100%
        height 100%
        display flex
        box-sizing border-box
        padding 15px 20px
        background #fff
        .title 
          width: 208px;
          height: 40px;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
          display: inline-block;
          margin-right: 10px;
          background-size: cover;
          background-position: center;
          margin-left 10px
          margin-top 8px
        div 
          width 80%
          height 56px
          box-sizing border-box
          padding 0px 20px
          background #ededed
          border-radius 10px
          span 
            display inline-block
            color #666666
            font-size 30px
            margin-top 10px
            padding 0 3px
        p 
          width 80px
          height 30px
          font-size 20px
          border-radius 2px
          color red
          border 1px solid red
          margin-top 15px
          text-align center
          line-height 30px
          border-radius 5px
          margin-left 20px
          vertical-align middle
      .category
        height 100%
        width 100%
        background #fff
        display flex
        .content
          width 92%
          display flex
          ul
            white-space nowrap
            li
              text-align center
              font-size 30px
              line-height 60px
              display inline-block
              margin 0 25px
              box-sizing border-box
              div
                width 120px
                border-bottom 6px solid #b4282d
                opacity 0
              .on
                opacity 1
        .btn
          height 66px
          width 8%
          background #fff
          z-index 2
          padding-bottom 6px solid #fff
          span 
            display block
            line-height 66px
            text-align center
            transition 1s
            &.toUp
              transform rotate(180deg)
              transition 1s
      
    .wraper
      width 100%
      height 88%
      background #eee
      .contentWraper
        .swiper-container
          width 750px
          height 370px
          background #f9f9f9
          .swiper-wrapper
            width 750px
            height 370px
            .swiper-slide
              img
                width 750px
                height 370px
          .swiper-pagination-custom
            bottom 10px
            left 0
            width 100%
            .swiper-pagination-customs
              width 30px
              height 4px
              display inline-block
              background #000
              opacity .5
              margin 0 5px
            .swiper-pagination-customs-active
              opacity 1
              background-color #F78E00


        .support
          width 100%
          height 100%
          background #fff
          .wraper
            width 100%
            display flex
            justify-content center
            align-content  center
            div
              line-height 72px
              font-size 24px
              span 
                color #b4282d
                margin-right 3px
            .active
              margin 0 30px
        .list
          width 100%
          height 332px
          background #fff
          padding-bottom 30px
          ul
            width 100%
            height 332px
            li
              width 20%
              height 50%
              float left 
              div
                height 100%
                width 100%
                display flex
                flex-direction column
                align-items center
                img
                  width 110px
                  height 110px
                  border-radius 20px
                  margin-top 30px
        .img
          width 100%
          height 160px
          margin 30px 0

        .newPerson
          width 100%
          height 100%
          color #333
          font-size 32px
          background #fff
          padding-bottom 30px
          .header
            padding 20px 0
            span 
              width 24px
              height 3px
            .content
              width 100%
              height 100%
              display block
              text-align center
          .bodys
            display flex
            justify-content center
            .bodyLeft
              width 42%
              height 100%
              background #F9E9CF
              h2
                padding 30px 0 0 30px
                text-align center
              img
                display block
                width 258px
                padding 30px 
            .bodyRight
              width 52%
              margin-left 10px
              .top
                height 50%
                position relative
                background #F9E9CF
                p,span
                  padding 20px 0 0 30px
                span 
                  font-size 24px
                  color f7f7f7
                img 
                  width 200px
                  position absolute
                  right 0
                  bottom 0
              .bottom
                position relative
                height 50%
                background #F9E9CF
                margin-top 5px
                p,span
                  padding 20px 0 0 30px
                span 
                  background #CBB693
                  padding 0 10px
                  font-size 22px
                  color white
                  margin  20px 0 0 30px
                  border-radius 5px
                img 
                  width 200px
                  position absolute
                  right 0
                  bottom 0
        
        
        

        .hasFourList
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            position relative
            .title
              margin-left 30px
              font-size 36px
            .titleRight
              font-size 24px
              position absolute
              right 30px
              top 0
          ul
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 44%
              height 100%
              padding 20px 0 0 20px
              margin 4px 0 0 4px
              background-color #f5f5f5
            .big
              text-align center
              font-size 32px
              color #333
              padding-left 10px
            .small
              text-align center
              font-size 24px
              color #7f7f7f
              margin 10px 0
              padding-left 10px
            div
              img
                display block
                margin 0 auto
                width 150px
                height 150px
      

        .hotSall
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            .title
              font-size 36px
              margin-left 40px
          .top
            display flex
            justify-content center
            margin-top 20px
            li
              width 44%
              height 100%
              padding 0px 0 0 20px
              margin 4px 0 0 4px
              background-color #f5f5f5
              display flex
              justify-content center
              background #F9F3E4
              .contentLeft
                margin-right 5px
            .big
              text-align center
              font-size 32px
              color #333
              padding-left 10px
              padding-top 60%
            .small
              display inline-block
              width 40px
              border-bottom 5px solid #000
              margin-left 10px
              margin-top 20px
            div
              img
                display block
                margin 0 auto
                width 200px
                height 200px
          .bottom
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 23%
              height 100%
              margin 4px 0 0 4px
              background-color #f5f5f5
            .small
              text-align center
              font-size 24px
              color #7f7f7f
              margin-top 20px
            div
              img
                display block
                margin 0 auto
                width 120px
                height 120px
        .personSupport
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            position relative
            .title
              margin-left 30px
              font-size 36px
            .titleRight
              font-size 24px
              position absolute
              right 30px
              top 0
          .contentRight
            display flex
            background #eeeeee
            margin 30px 
            img 
              display block
              width 43%
            .contentRightPrice
              width 53%
              margin-top 15%
              .top
                text-align center
                font-size 20px
                color #CE2424
                display inline-block
                padding 5px
                border 2px solid #CE2424 
                border-radius 10px
              .big
                width 100%
                margin 10px 0
                font-size 24px
                color #333
              .small
                text-align center
                font-size 20px
                color #CE2424
                display inline-block
                padding 5px
                border 2px solid #CE2424 
                border-radius 10px
              
          ul
            display flex
            justify-content center
            margin-top 10px
            li
              width 27%
              height 100%
              margin 0 15px
            .big
              width 100%
              margin 10px 0
              font-size 24px
              color #333
              span 
                color #B4282D
                font-size 24px
            .small
              text-align center
              font-size 20px
              color #CE2424
              display inline-block
              padding 5px
              border 2px solid #CE2424 
              border-radius 10px
            div
              img
                display block
                margin 0 auto
                width 216px
                height 216px
                background-color #f5f5f5
        .limit
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            position relative
            .title
              margin-left 30px
              font-size 36px
              span
                display inline-block
                height 100%
                width 50px
                background #000
                color #fff
                margin 0 5px
                text-align center
                font-size 30px
                padding 3px 0
            .titleRight
              font-size 24px
              position absolute
              right 30px
              top 0
          ul
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 28%
              height 100%
              background #fff
              margin 10px
            .big
              display inline
              color #B4282D
              text-align center
              font-size 24px
              margin-right 15px
            .small
              display inline
              text-align center
              font-size 24px
              color #7f7f7f
              margin 10px 0
              position relative
              span
                position absolute
                top 50%
                left 0
                display inline-block
                width 100%
                border-bottom 3px solid #7f7f7f  
            div
              img
                display block
                margin 0 auto
                width 100%
                height 100%
                background #eee
                margin 0 0 20px 0
        .hot
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            position relative
            .title
              margin-left 30px
              font-size 36px
            .titleTop
              width 100%
              display flex
              justify-content center
              margin-top 30px
              img 
                width 40%
                background #FEF0DF
              .titleTopWraper
                width 52%
                background #FEF0DF
                div
                  margin-top 50%
                  transform translateY(-50%)
                  .top
                    display inline-block
                    font-size 16px
                    line-height 16px
                    color #CE2424
                    padding 5px 10px
                    border 1px solid #CE2424
                    border-radius 20px
                  .big
                    width 100%
                    margin 10px 0
                    font-size 30px
                    color #333
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                  .small
                    font-size 20px
                    color #7F7F7F
                  .bottom
                    margin 10px 0
                    height 40px
                    line-height 40px
                    font-size 24px
                    color #B4282D
            .titleRight
              font-size 24px
              position absolute
              right 30px
              top 0
          ul
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 29%
              height 100%
              margin 10px 
            .big
              font-size 24px
              color #333
              line-height 40px
              margin-top 5px
              span
                color #CE2424
            .small
              span
                display inline-block
                font-size 16px
                line-height 16px
                color #CE2424
                padding 5px 10px
                border 1px solid #CE2424
                border-radius 20px
            div
              img
                display block
                margin 0 auto
                width 100%
                height 100%
                background-color #f5f5f5
        .firstSall
          margin-top 40px
          background #fff
          padding 30px 0
          .content
            position relative
            .title
              margin-left 30px
              font-size 36px
            .titleRight
              font-size 24px
              position absolute
              right 30px
              top 0
          ul
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 29%
              height 100%
              margin 10px 
            .big
              font-size 24px
              color #333
              line-height 40px
              margin-top 5px
              span
                color #CE2424
            .small
              span
                display inline-block
                font-size 16px
                line-height 16px
                color #CE2424
                padding 5px 10px
                border 1px solid #CE2424
                border-radius 20px
            div
              img
                display block
                margin 0 auto
                width 100%
                height 100%
                background-color #f5f5f5
        .fourPage
          margin-top 40px
          background #fff
          padding 30px 0
          ul
            display flex
            flex-wrap wrap
            justify-content center
            margin-top 20px
            li
              width 44%
              height 100%
              padding 20px 0 0 20px
              margin 4px 0 0 4px
              background-color #f5f5f5
            .big
              font-size 32px
              color #333
              margin-left 10px
            .small
              font-size 24px
              color #7f7f7f
              margin 10px 
            div
              display flex
              img
                display block
                margin 0 auto
                width 50%
                height 50%
        .summer
          width 100%
          background #fff
          img
            display block
            width 94%
            margin 0 auto
          .summerWraper
            width 100%
            display flex
            ul
              display flex
              margin-top 20px
              li
                margin 10px 
                .big
                  font-size 24px
                  color #333
                  line-height 40px
                  margin-top 5px
                  span
                    color #CE2424
                .small
                  span
                    display inline-block
                    font-size 16px
                    line-height 16px
                    color #CE2424
                    padding 5px 10px
                    border 1px solid #CE2424
                    border-radius 20px
                div
                  img
                    display block
                    margin 0 auto
                    width 200px
                    height 200px
                    background-color #f5f5f5
        .summerSecond
          width 100%
          background #fff
          img
            display block
            width 94%
            margin 0 auto
          .summerWraper
            width 100%
            display flex
            ul
              display flex
              margin-top 20px
              li
                margin 10px 
                .big
                  font-size 24px
                  color #333
                  line-height 40px
                  margin-top 5px
                  span
                    color #CE2424
                .small
                  span
                    display inline-block
                    font-size 16px
                    line-height 16px
                    color #CE2424
                    padding 5px 10px
                    border 1px solid #CE2424
                    border-radius 20px
                div
                  img
                    display block
                    margin 0 auto
                    width 200px
                    height 200px
                    background-color #f5f5f5
        .footer
          background #414141
          padding 30px 0
          margin-top 20px 
          .btn
            display flex
            justify-content center
            p
              padding-bottom 20px 
              span
                color #fff
                font-size 24px
                display block
                width 150px
                height 50px
                line-height 50px
                text-align center
                margin 10px 20px
                border 1px solid #999
          p
            color #999
            text-align center
            font-size 24px
        
        
      

        
        

</style>
