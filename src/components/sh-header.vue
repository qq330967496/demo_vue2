<!--
头部组件
v3.0.2 取消fixed定位
v3.0.1 支持状态栏样式
v3.0.0 兼容iphoneX
-->
<template>
  <!--兼容iphoneX-->
  <header v-if="!is_weixin"
          :class="{'ios':is_ios,'iphoneX':is_iphoneX,'white':bar_style=='white','tran':is_header_transparent}">
    <div class="header_inner">
      <div class="header_ios_top">
      </div>
      <div class="header_main">
        <div class="left">
          <div class="text_mod" v-if="left_text!=null"
               @click.stop="leftEvent()">
          </div>
          <div class="arrow_mod" @click.stop="leftEvent()" v-if="left_text==null">
            <span class="arrow_left"></span>
          </div>
          <div class="across_mod" @click.stop="close()" v-if="right_text!=null">
            <span class="across"></span>
          </div>
        </div>
        <div class="title">
          {{title ? title : ''}}
        </div>
        <div @click.stop="rightEvent()"
             class="right">
          <div class="text_mod" v-if="right_text!=null">
            {{right_text}}
          </div>
          <div class="across_mod" v-if="right_text==null">
            <span class="across"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
  /*头部*/
  header {
    height: 2.35rem;
    width: 100%;
    z-index: 99999;
  }

  header * {
    font-size: 0.75rem !important;
  }

  header.ios {
    height: 3.35rem;
  }

  header.iphoneX {
    height: 3.85rem;
  }

  header > .header_inner {
    /*position: fixed;*/
    background-color: #646464;
    color: #d0d0d0;
    width: 100%;
    z-index: 99999;
    box-sizing: border-box;
    /*top: 0;*/
    /*left: 0;*/
    /*-webkit-transform: translate3d(0, 0, 0);*/
  }

  header > .header_inner > .header_main {
    display: flex;
    align-items: center;
    /*flex-wrap: wrap;*/

    display: -webkit-flex;
    -webkit-align-items: center;
    /*-webkit-flex-wrap: wrap;*/
  }

  /*header.ios > .header_inner {
      padding-top: 1rem;
  }
  header.iphoneX > .header_inner{
      padding-top: 1.5rem;
  }*/
  header .header_ios_top {
    width: 100%;
    display: none;
  }

  header.ios .header_ios_top {
    height: 1rem;
    display: block;
  }

  header.iphoneX .header_ios_top {
    height: 1.5rem;
    display: block;
  }

  header .header_inner > .header_main > .left {
    flex: 1;
    -webkit-flex: 1;
    height: 2.35rem;
    line-height: 2.35rem;
    /*padding-left: 1rem;*/
    display: flex;
    display: -webkit-flex;
    text-align: center;
  }

  header .header_inner > .header_main > .left > .text_mod {
    flex: 0.6;
    -webkit-flex: 0.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 60%;
  }

  header .header_inner > .header_main > .left > .arrow_mod {
    flex: 0.6;
    -webkit-flex: 0.6;
    max-width: 60%;
  }

  header .header_inner > .header_main > .left > .across_mod {
    flex: 0.4;
    -webkit-flex: 0.4;
    max-width: 40%;
  }

  header .header_inner > .header_main > .title {
    flex: 2.5;
    -webkit-flex: 2.5;
    text-align: center;
    /*font-weight: bold;*/
    font-size: 0.9rem !important;
    height: 2.35rem;
    line-height: 2.35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 55.556%;
  }

  header .header_inner > .header_main > .right {
    flex: 1;
    -webkit-flex: 1;
    /*padding-right: 1rem;*/
    height: 2.35rem;
    line-height: 2.35rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: flex-end;
    max-width: 22.222%;
  }

  header .header_inner > .header_main > .right > .text_mod {
    flex: 1;
    -webkit-flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  header .header_inner > .header_main > .right > .across_mod {
    flex: 0.6;
    -webkit-flex: 0.6;
    max-width: 60%;
  }

  .arrow_left {
    border-top: 2px solid #d0d0d0;
    border-left: 2px solid #d0d0d0;
    padding: 0.25rem;
    width: 0;
    display: inline-block;

    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);

  }

  .arrow_left:active {
    opacity: 0.5;
  }

  .across {
    padding: 0.325rem;
    display: inline-block;
    position: relative;
  }

  .across:before, .across:after {
    content: '';
    position: absolute;
    height: 130%;
    width: 2px;
    background: #d0d0d0;
    display: inline-block;
    top: 0;
    left: 50%;
  }

  .across:before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .across:after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .across:active {
    opacity: 0.5;
  }

  header.white > .header_inner {
    background: #fff;
    color: #222;
  }

  header.white > .header_inner .arrow_left {
    border-color: #222;
  }

  header.white .across:before, header.white .across:after {
    background: #222;
  }

  header.white .header_ios_top {
    /*background: #222;*/
    background: #fff;
  }

  header.tran > .header_inner {
    background: transparent;
  }

  .text_mod:active {
    opacity: 0.5;
  }
</style>

<script>
  var h_utils = {
    //移动端环境判断
    ua: navigator.userAgent,
    //微信
    isWeixin: function () {
      return this.ua.match(/MicroMessenger/i);
    },
    //ios
    isIos: function () {
      return !!this.ua.match(/iPhone|iPod|iPad/i);
    },
    //安卓
    isAndroid: function () {
      return !!this.ua.match(/Android/i);
    },
    //iphoneX
    isIphoneX: function () {
      if (this.isIos()) {
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375);
      } else {
        return false;
      }
    },
    //执行指令
    goToApp: function (cmd, param) {
      var _self = this;
      if (cmd == 'closeWebView') {
        _self.goToApp('setStatusBarStyle', 'style==0');
      }
      //跟app的交互
      setTimeout(function () {
        if (_self.isAndroid()) {
          console.log('执行安卓指令:' + cmd + ':' + param);
          window.JavaScriptHelper ? window.JavaScriptHelper.sendCommand(cmd, param) : ''; // java接口调用
        } else if (_self.isIos()) {
          console.log('执行IOS指令:' + cmd + ':' + param);
          window.location = cmd + ":" + param;
        }
      }, 300);
    },
    /**
     * 兼容性获取滚动条到顶部的距离
     * @returns {number|Number}
     */
    getScrollTop: function () {
      return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
  };

  export default {
    name: 'sh-header',
    props: {
      hide_back: Boolean,//是否隐藏返回按钮
      hide_close: Boolean,//是否隐藏关闭按钮
      left_text: String,//左侧文字
      title: String,//标题
      right_text: String,//右侧文字
//            left_event:Function,
//            right_event:Function,
      stop_event: String,//阻止默认事件，值：left，right，all
      bar_style: String,//非必填，值：white
      is_transparent: Boolean,//非必填，是否透明
    },
    data() {
      return {
        token: '',
        is_weixin: h_utils.isWeixin(),
        is_ios: h_utils.isIos(),
        is_iphoneX: h_utils.isIphoneX(),
        is_scrolling: false,
        is_header_transparent: false,
      }
    },
    mounted: function () {
      var _self = this;
      if (_self.is_transparent) {
        _self.is_header_transparent = true;
        window.onscroll = function () {
          if (h_utils.getScrollTop() > 10) {
            _self.is_header_transparent = false;
          } else {
            _self.is_header_transparent = true;
          }
        };
      }
    },
    methods: {
      leftEvent: function () {
        if (this.stop_event === 'left' || this.stop_event === 'all') {
          this.$emit('left');
        } else {
          this.toBack();
        }
      },
      rightEvent: function () {
        if (this.stop_event === 'right' || this.stop_event === 'all') {
          this.$emit('right');
        } else {
          this.close();
        }
      },
      toBack: function () {
        /*alert(document.referrer);
        if(document.referrer==''){//判断有没有上一页
            this.close();
        }else{
            window.history.back();
        }*/
        if (this.$router.goBack) {
          this.$router.goBack();
        } else {
          window.history.back();
        }
      },
      close: function () {
        h_utils.goToApp('closeWebView', '-1');
      },
    }
  };
</script>
