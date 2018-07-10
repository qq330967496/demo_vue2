<template>
  <div class="sh-dialog" v-if="this_show">
    <sh-scroll class="sh-dialog-scroll" :stop_bounce="true">
      <div class="sh-dialog-main alert" :class="{show:this_show}" v-if="this_type=='alert'">
        <div class="sh-dialog-title" v-if="this_title">
          {{this_title}}
        </div>
        <div class="sh-dialog-content">
          {{this_content}}
        </div>
        <div class="sh-dialog-opera">
          <div class="sh-dialog-btn"
               @touchstart.stop="start"
               @touchmove.stop="move"
               @touchend.stop="!isMoving?bindOk():''">
            {{this_ok_text || '确定'}}
          </div>
        </div>
      </div>

      <div class="sh-dialog-main confirm" :class="{show:this_show}" v-if="this_type=='confirm'">
        <div class="sh-dialog-title" v-if="this_title">
          {{this_title}}
        </div>
        <div class="sh-dialog-content">
          {{this_content}}
        </div>
        <div class="sh-dialog-opera">
          <div class="sh-dialog-btn"
               @touchstart.stop="start"
               @touchmove.stop="move"
               @touchend.stop="!isMoving?bindCancel():''">
            {{this_cancel_text || '取消'}}
          </div>
          <div class="sh-dialog-btn"
               @touchstart.stop="start"
               @touchmove.stop="move"
               @touchend.stop="!isMoving?bindOk():''">
            {{this_ok_text || '确定'}}
          </div>
        </div>
      </div>

      <div class="sh-dialog-main common" :class="{show:this_show}" v-if="this_type!='confirm' && this_type!='alert'">
        <slot></slot>
      </div>

      <div class="sh-mask"
           @touchstart.stop="start"
           @touchmove.stop="move"
           @touchend.stop="!isMoving?(show===true?close():''):''"></div>
    </sh-scroll>
  </div>
</template>
<style>
  .sh-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*display: -webkit-flex;*/
    /*-webkit-justify-content: center;*/
    /*-webkit-align-items: center;*/
    z-index: 10000;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
  }

  .sh-dialog-scroll {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10001;
  }

  .sh-dialog-scroll .sh-scroll-main {
    min-height: 100%;
  }

  /*TODO 可通用*/
  .sh-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .7;
    z-index: 10000;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .sh-dialog-main {
    text-align: center;
    position: relative;
    z-index: 10001;
    background: #fff;
    width: 80%;
    -webkit-border-radius: 0.25rem;
    -moz-border-radius: 0.25rem;
    border-radius: 0.25rem;
    word-wrap: break-word;
    margin: 0 auto;
    margin-top: 30%;
    margin-bottom: 10%;
    animation: hideAni 0.3s;
    overflow: hidden;
  }

  .sh-dialog-main.show {
    animation: showAni 0.3s;
  }

  .sh-dialog-main.common {
    background: transparent;
    max-width: none;
    min-width: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;

  }

  .sh-dialog-title {
    padding: 0.75rem;
    padding-bottom: 0;
    text-align: center;
    font-size: .75rem;
    /*font-weight: bold;*/
  }

  .sh-dialog-content {
    padding: 1.5rem 0.75rem;
  }

  .sh-dialog-opera {
    text-align: center;
    border-top: 1px solid #cccccc;
    color: #1c80f0;
    display: flex;
  }

  .sh-dialog-btn {
    flex: 1;
    padding: 0.75rem;
  }

  .sh-dialog-btn:active {
    background: #ccc;
  }

  .sh-dialog-btn + .sh-dialog-btn {
    border-left: 1px solid #cccccc;
  }

  @keyframes showAni {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes hideAni {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.5);
    }
  }

  @-webkit-keyframes showAni {
    0% {
      -webkit-transform: scale(0.95);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }

  @-webkit-keyframes hideAni {
    0% {
      -webkit-transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.5);
    }
  }
</style>
<script>
  var pageScroll = (function () {
    var fn = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };
    var islock = false;

    return {
      lock: function (el) {
        if (islock) return;
        islock = true;
        (el || document).addEventListener("touchmove", fn);
      },
      unlock: function (el) {
        islock = false;
        (el || document).removeEventListener("touchmove", fn);
      }
    };
  })();

  export default {
    name: 'sh-dialog',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      /*title:String,
      type:String,
      alert_ok:String,
      show:{
          type:Boolean,
          default:false,
      },
      confirm_cancel:String,
      confirm_ok:String,*/
    },
    data() {
      return {
        this_title: '',
        this_content: '',
        this_type: '',
        this_ok_text: '',
        this_cancel_text: '',
        this_show: false,
        isMoving: false,
      }
    },
    update: function () {

    },
    beforeMount: function () {

    },
    mounted: function () {
      this.init();
    },
    methods: {
      start(){
        this.isMoving = false;
      },
      move(){
        this.isMoving = true;
      },
      init() {
        this.this_type = '';
        this.this_title = '';
        this.this_content = '';
        this.this_ok_text = '';
        this.this_cancel_text = '';
        this.this_show = false;
      },
      toShow() {
        document.querySelector('.child-view').appendChild(this.$el);
        this.this_show = true;
        pageScroll.lock();
        pageScroll.unlock(this.$el);
      },
      bindOk() {
        this.ok(true);
        this.close();
      },
      bindCancel() {
        this.cancel(false);
        this.close();
      },
      close(isCommon) {
        this.init();
        if (isCommon) {
          document.querySelector('.child-view').removeChild(this.$el);
        } else {
          this.$emit('close');
        }
        pageScroll.unlock();
        this.$emit('update:show', false);
      },
    },
    watch: {
      show(val) {
        if (val) {
          pageScroll.lock();
        }
        this.this_show = val;
      }
    },
  };
</script>
