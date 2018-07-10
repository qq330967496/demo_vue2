<template>
  <div class="sh-scroll"
       @touchstart="bindStart"
       @touchmove="bindMove"
       @touchend="bindEnd">
    <div class="sh-scroll-main"
         :style="scroll_style">
      <div class="sh-scroll-top" :style="'margin-top:-'+max_top+'px'" v-if="can_pull_down">
        <img
          src="data:image/gif;base64,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"
          alt="">
      </div>
      <div class="sh-scroll-content">
        <slot></slot>
      </div>
    </div>

    <div class="sh-debugger" v-if="this_is_debug">
      帧率：{{fps}}<br/>
      鼠标距离：{{mouse_distance}}<br/>
      已滚动距离：{{distance}}<br/>
      现在距离顶部：{{scroll_top}}<br/>
      顶部最大距离：{{max_top}}<br/>
      底部最大距离：{{max_bottom}}<br/>
      触碰时间：{{touch_time}}<br/>
      当前组件高度：{{cur_event_node ? cur_event_node.clientHeight : ''}}<br/>
      body高度：{{total_height}}<br/>
    </div>
  </div>
</template>
<style>
  .sh-scroll {
    height: 100%;
    overflow: hidden;
    background: transparent;
  }

  .sh-scroll-main {
    /*margin-top: -3.75rem;*/
  }

  .sh-scroll-content {
    overflow: hidden;
  }

  .sh-scroll-top {
    text-align: center;
  }

  .sh-scroll-top img {
    height: 1.5rem;
    padding: 1rem;
  }

  /*TODO 可通用*/
  .sh-debugger {
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    padding: 0.5rem;
    left: 0;
    top: 10%;
    color: #fff;
    word-wrap: break-word;
    max-width: 80%;
    opacity: 0.7;
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
    name: 'sh-scroll',
    props: {
      is_debug: {
        type: String,
        require: false,
      },
      timeout: {
        type: Number,
        require: false,
        default: 3000,
      },
      can_pull_down: {
        type: Boolean,
        require: false,
        default: function () {
          return false
        }
      },
      stop_bounce: {
        type: Boolean,
        require: false,
        default: function () {
          return false
        }
      },

    },
    data() {
      return {
        this_is_debug: false,
        cur_event: null,
        cur_event_node: null,
        mouse_distance: 0,
        distance: 0,
        scroll_top: 0,
        max_top: 0,
        max_bottom: 0,
        transition_time: 0,
        touch_time: '',

        total_height: 0,
        fps: 0,
      }
    },
    beforeMount: function () {

    },
    mounted: function () {
      var _self = this;
      _self.showFps();
      this.$nextTick(function () {
        if (_self.is_debug != undefined) {
          _self.this_is_debug = true;
        }
        _self.total_height = document.body.clientHeight;
        /*_self.cur_event_node = _self.cur_event.target;
        while (_self.cur_event_node.className != 'sh-scroll') {
            _self.cur_event_node = _self.cur_event_node.parentNode;
        }*/

        _self.cur_event_node = _self.$el;
//                console.log(_self.cur_event_node);
        var top_node = _self.cur_event_node.firstChild.firstChild;
        var main_node = _self.cur_event_node.firstChild;
        var content_node = top_node.nextElementSibling;
        _self.max_top = top_node.offsetHeight;

        if (content_node.offsetHeight < _self.cur_event_node.offsetHeight) {
          _self.max_bottom = 0;
        } else {
          _self.max_bottom = content_node.offsetHeight - _self.cur_event_node.offsetHeight;
        }
      });
    },
    methods: {
      init() {

      },
      bindStart(e) {
        pageScroll.lock();
        var _self = this;
        _self.cur_event = e;
        _self.mouse_distance = 0;
        _self.touch_time = new Date().getTime();
      },
      bindMove(e) {
        e.preventDefault();
        var _self = this;
        if (_self.cur_event) {
//                    console.log(_self.cur_event);
//                    console.log(thisNode);

          var startMouseY = _self.cur_event.touches[0].pageY;
          var pullingMouseY = e.touches[0].pageY;
          _self.mouse_distance = pullingMouseY - startMouseY;//鼠标垂直距离
          _self.transition_time = 0;
          /*if (_self.distance < 0) {
              _self.distance = 0;
          }*/
          _self.scroll_top = (_self.distance + _self.mouse_distance);
          if (_self.stop_bounce) {//阻止回弹
            if (_self.scroll_top >= 0) {
              _self.scroll_top = 0;
            } else if (_self.scroll_top <= -_self.max_bottom) {
              _self.scroll_top = -_self.max_bottom;
            }
          }


          if (_self.scroll_top >= 0) {
            _self.scroll_top = _self.scroll_top * 0.25;//摩擦系数
          } else if (_self.scroll_top <= -_self.max_bottom) {
            _self.scroll_top = -_self.max_bottom + (_self.scroll_top + _self.max_bottom) * 0.25;//摩擦系数
          }
        } else {

        }
      },
      bindEnd() {
        pageScroll.unlock();
        var _self = this;
        _self.touch_time = new Date().getTime() - _self.touch_time;

        //惯性
        _self.transition_time = 500;
        var inte = window.setInterval(function () {
          if (_self.transition_time < 0) {
            window.clearInterval(inte);
          }
          _self.transition_time -= 100;
        }, 100);
        if (_self.scroll_top < 0 && _self.scroll_top >= -_self.max_bottom && _self.touch_time < 300) {
          if (_self.mouse_distance > 0) {
            _self.scroll_top += 5000 * (_self.mouse_distance / _self.touch_time);
            if (_self.scroll_top >= 0) {
              _self.scroll_top = 0;
            }
          } else {
            _self.scroll_top -= 5000 * (-_self.mouse_distance / _self.touch_time);
          }
        }

        if (_self.scroll_top >= 0) {
          if (_self.can_pull_down && _self.scroll_top > _self.max_top * 0.8) {//可下拉且超过一个值，触发下拉事件
            _self.scroll_top = _self.max_top;
//                        console.log('触发下拉事件');
            _self.$emit('pull_down');

            window.setTimeout(function () {//超时还原
              _self.closePullDown();
            }, _self.timeout);
          } else {
            _self.scroll_top = 0;
          }
        } else if (_self.scroll_top < -_self.max_bottom) {
          _self.scroll_top = -_self.max_bottom;
        }

        _self.distance = _self.scroll_top;
        _self.mouse_distance = 0;
      },
      showFps() {
        var _self = this;
        var requestAnimationFrame =
          window.requestAnimationFrame || //Chromium
          window.webkitRequestAnimationFrame || //Webkit
          window.mozRequestAnimationFrame || //Mozilla Geko
          window.oRequestAnimationFrame || //Opera Presto
          window.msRequestAnimationFrame || //IE Trident?
          function (callback) { //Fallback function
            window.setTimeout(callback, 1000 / 60);
          };
        var e, pe, pid, fps, last, offset, step, appendFps;
        fps = 0;
        last = Date.now();
        step = function () {
          offset = Date.now() - last;
          fps += 1;
          if (offset >= 1000) {
            last += offset;
            _self.fps = fps;
            fps = 0;
          }
          requestAnimationFrame(step);
        };
        step();
      },
      closePullDown() {
        var _self = this;
        if (_self.scroll_top > 0) {
//                    console.log('组件方法-执行关闭');
          _self.scroll_top = 0;
          _self.distance = _self.scroll_top;
          _self.transition_time = 500;
        }
      }
    },
    watch: {},
    computed: {
      scroll_style() {
        /*var str = '\
        transition:transform cubic-bezier(0.1, 0.57, 0.1, 1) ' + this.transition_time + 's;\
        transition-duration: 0ms;\
        transform-origin:0px 0px 0px;\
        transform: translate3d(0px,  ' + this.scroll_top + 'px, 0px) scale(1);\
        -webkit-transition: -webkit-transform cubic-bezier(0.1, 0.57, 0.1, 1) ' + this.transition_time + 's;\
        -webkit-transform-origin: 0px 0px 0px;\
        -webkit-transform: translate3d(0px, ' + this.scroll_top + 'px, 0px) scale(1);';
        return str;*/
        var str = '' +
          'transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); ' +
          'transition-duration: ' + (this.transition_time) + 'ms; ' +
          'transform: translate(0px, ' + this.scroll_top + 'px) translateZ(0px);' +
          '-webkit-transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); ' +
          '-webkit-transition-duration: ' + (this.transition_time) + 'ms; ' +
          '-webkit-transform: translate(0px, ' + this.scroll_top + 'px) translateZ(0px);' +
          '';
        return str;
      }
    }
  };
</script>
