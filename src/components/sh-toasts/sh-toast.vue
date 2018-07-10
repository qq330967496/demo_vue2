<template>
  <div class="sh-toast" v-if="this_show">
    <div class="sh-toast-main " :class="{show:this_show}" v-if="!this_type">
      <div class="sh-toast-text">
        {{this_content}}
      </div>
    </div>
    <div class="sh-toast-main success" :class="{show:this_show}" v-if="this_type==='success'">
      <div class="sh-toast-icon">
        <div class="sh-icon-success"></div>
      </div>
      <div class="sh-toast-text">
        {{this_content}}
      </div>
    </div>
    <div class="sh-toast-main fail" :class="{show:this_show}" v-if="this_type==='fail'">
      <div class="sh-toast-icon">
        <div class="sh-icon-fail"></div>
      </div>
      <div class="sh-toast-text">
        {{this_content}}
      </div>
    </div>
    <div class="sh-toast-main loading" :class="{show:this_show}" v-if="this_type==='loading'">
      <div class="sh-toast-icon">
        <!--<div class="sh-icon-loading"></div>-->
        <div class="sh-icon-loading">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <div class="sh-toast-text">
        {{this_content}}
      </div>
    </div>
  </div>
</template>
<style>
  .sh-toast {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
  }

  .sh-toast-main {
    color: #ffffff;
    background: rgba(0, 0, 0, 0.75);
    text-align: center;
    max-width: 80%;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;

    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
    animation: hideAni 0.3s;
  }

  .sh-toast-main.show {
    animation: showAni 0.3s;
  }

  .sh-toast-icon {
    margin-bottom: 0.5rem;
  }

  /*TODO 可通用*/
  .sh-icon-loading {
    position: relative;
    margin: 0 auto;
    width: 2rem;
    text-align: center;
    padding: 0.8rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sh-icon-loading > div {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #ddd;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .sh-icon-loading .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .sh-icon-loading .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
    }
    40% {
      transform: scale(1.0);
    }
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0.0)
    }
    40% {
      -webkit-transform: scale(1.0)
    }
  }

  .sh-icon-success, .sh-icon-fail {
    width: 2.5rem;
    height: 2.5rem;
    border: 0.1rem solid #ddd;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sh-icon-success:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    border: 0.1rem solid #ddd;
    border-left: 0;
    border-bottom: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;

    transform: rotate(135deg);
    -ms-transform: rotate(135deg); /* IE 9 */
    -moz-transform: rotate(135deg); /* Firefox */
    -webkit-transform: rotate(135deg); /* Safari 和 Chrome */
    -o-transform: rotate(135deg); /* Opera */
  }

  .sh-icon-fail:before, .sh-icon-fail:after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 1rem;
    height: 0.1rem;
    background: #ddd;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;

    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -moz-transform: rotate(45deg); /* Firefox */
    -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
    -o-transform: rotate(45deg); /* Opera */
  }

  .sh-icon-fail:after {
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); /* IE 9 */
    -moz-transform: rotate(-45deg); /* Firefox */
    -webkit-transform: rotate(-45deg); /* Safari 和 Chrome */
    -o-transform: rotate(-45deg); /* Opera */
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
    name: 'sh-toast',
    props: {},
    data() {
      return {
        this_show: false,
        this_type: '',//success,fail,loading
        this_content: '',
        this_time: 8000,
      }
    },
    beforeMount: function () {

    },
    mounted: function () {
      this.init();
    },
    methods: {
      init() {
        this.this_show = false;
        this.this_type = '';
        this.this_content = '';
        this.this_time = 8000;
      },
      toShow() {
        var _self = this;
        pageScroll.lock();
        document.querySelector('.child-view').appendChild(this.$el);
        this.this_show = true;
      },
      setTimer() {
        var _self = this;
        window.setTimeout(function () {
          _self.close();
        }, _self.this_time);
      },
      close() {
        if(this.this_show){
          pageScroll.unlock();
          this.this_show = false;
          try{
            document.querySelector('.child-view').removeChild(this.$el);
          }catch(err){
            if(err.name === 'NotFoundError'){
              console.warn('toast已关闭');
            }else{
              throw Error(err);
            }
          }
        }
      }
    },
    watch: {
      $route(to, from) {
        console.log('1111111');
        this.close();
      }
    }
  };
</script>
