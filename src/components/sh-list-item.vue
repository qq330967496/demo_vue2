<template>
  <div class="sh-list-item"
       @touchstart="start"
       @touchmove="move"
       @touchend="!isMoving?bindClick():''"
       :class="{arrow:type=='arrow',more:type=='more',checkbox:type=='checkbox',switch:type=='switch'}">
    <div class="sh-list-item-inner">
      <div class="sh-list-item-content sh-left"
           v-if="this_scale[0]"
           :style="this_scale[0]?'flex:'+this_scale[0]+';-webkit-flex:'+this_scale[0]+';':''">
        <slot name="left"></slot>
      </div>
      <div class="sh-list-item-content sh-mid"
           v-if="col==3 && this_scale[1]"
           :style="col==3 && this_scale[1]?'flex:'+this_scale[1]+';-webkit-flex:'+this_scale[1]+';':''">
        <slot name="mid"></slot>
      </div>
      <div class="sh-list-item-content sh-right"
           v-if="col==3?this_scale[2]:this_scale[1]"
           :style="(col==3?this_scale[2]:this_scale[1])?'flex:'+(col==3?this_scale[2]:this_scale[1])+';-webkit-flex:'+(col==3?this_scale[2]:this_scale[1])+';':''">
        <slot name="right"></slot>
      </div>
      <div class="sh-list-item-right-icon" v-if="type">
        <div class="sh-icon-checkbox" :class="{active:this_checked,disabled:this_disabled}"
             v-if="type=='checkbox' || type=='radio'">

        </div>
        <div class="sh-icon-switch" :class="{active:this_checked,disabled:this_disabled}" v-if="type=='switch'">

        </div>
        <div class="sh-icon-arrow" v-if="type=='arrow'">

        </div>
        <div class="sh-icon-more" :class="{'active':this_show_sub}" v-if="type=='more'">

        </div>
      </div>

      <div class="sh-list-subs" v-if="this_show_sub">
        <slot name="sh-list-sub"></slot>
      </div>
    </div>
  </div>
</template>
<style>
  .sh-list-item.arrow:active {
    background: #eee;
  }

  .sh-list-item-inner {
    margin-left: 1rem;
    padding-right: 1rem;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
  }

  .sh-list-item:last-child .sh-list-item-inner {
    border-bottom: 0;
  }

  .sh-list-item-content {
    padding: 1rem 0;
  }

  .sh-list-item-right-icon {
    /*width: 1.5rem;*/
    margin-left: 0.5rem;
    text-align: right;
  }

  .sh-left {
    color: #666666;

  }

  .sh-mid {
    text-align: center;
  }

  .sh-right {
    text-align: right;
  }

  .sh-right input {
    text-align: right;
  }

  .sh-icon-checkbox {
    position: relative;
    text-align: center;
    width: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sh-icon-checkbox:after {
    content: '';
    display: inline-block;
    padding: 0.4rem;
    border: 1px solid #ccc;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    vertical-align: middle;
  }

  .sh-icon-checkbox.active:after {
    border: 1px solid #28bc93;
    background: #28bc93;
  }

  .sh-icon-checkbox.active:before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0.2rem;
    height: 0.4rem;
    border: 1px solid #fff;
    border-bottom: 0;
    border-right: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto auto;

    transform: rotate(-135deg);
    -ms-transform: rotate(-135deg); /* IE 9 */
    -moz-transform: rotate(-135deg); /* Firefox */
    -webkit-transform: rotate(-135deg); /* Safari 和 Chrome */
    -o-transform: rotate(-135deg); /* Opera */
  }

  .sh-icon-switch {
    width: 1.5rem;
    height: 1rem;
    background: #ccc;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
  }

  .sh-icon-switch:before {
    content: '';
    display: block;
    border: 0 solid #28bc93;
    padding: 0.5rem;
    -moz-transition: all 0.2s; /* Firefox 4 */
    -webkit-transition: all 0.2s; /* Safari 和 Chrome */
    -o-transition: all 0.2s; /* Opera */
    vertical-align: middle;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
  }

  .sh-icon-switch:after {
    content: '';
    display: inline-block;
    position: absolute;
    /*padding:0.4rem;*/
    height: 0.8rem;
    width: 0.8rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
    background: #fff;
    top: 0;
    bottom: 0;
    right: 0.5rem;
    left: 0;
    margin: auto auto;
    box-sizing: border-box;

    transition: right 0.2s;
    -moz-transition: right 0.2s; /* Firefox 4 */
    -webkit-transition: right 0.2s; /* Safari 和 Chrome */
    -o-transition: right 0.2s; /* Opera */
  }

  .sh-icon-switch.active:before {
    border: 0.5rem solid #28bc93;
    padding: 0;
  }

  .sh-icon-switch.active:after {
    right: -0.5rem;
  }

  .sh-icon-arrow:after, .sh-icon-more:after {
    content: '';
    border: 1px solid #666;
    border-right: 0;
    border-bottom: 0;
    padding: 0.2rem;
    display: inline-block;
    vertical-align: middle;
    transform: rotate(135deg);
    -ms-transform: rotate(135deg); /* IE 9 */
    -moz-transform: rotate(135deg); /* Firefox */
    -webkit-transform: rotate(135deg); /* Safari 和 Chrome */
    -o-transform: rotate(135deg); /* Opera */
  }

  .sh-icon-more:after {
    transition: transform 0.2s;
    -moz-transition: transform 0.2s; /* Firefox 4 */
    -webkit-transition: transform 0.2s; /* Safari 和 Chrome */
    -o-transition: transform 0.2s; /* Opera */

    transform: rotate(225deg);
    -ms-transform: rotate(225deg); /* IE 9 */
    -moz-transform: rotate(225deg); /* Firefox */
    -webkit-transform: rotate(225deg); /* Safari 和 Chrome */
    -o-transform: rotate(225deg); /* Opera */
  }

  .sh-icon-more.active:after {
    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -moz-transform: rotate(45deg); /* Firefox */
    -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
    -o-transform: rotate(45deg); /* Opera */
  }

  .sh-list-subs {
    width: 100%;
  }

  .sh-icon-switch.disabled {
    -webkit-filter: brightness(1.15);
    filter: brightness(1.15);
  }

  .sh-icon-checkbox.disabled {
    /*-webkit-filter:brightness(1.15);*/
    /*filter:brightness(1.15);*/
  }

  .sh-icon-checkbox.disabled:after {
    background: #cccccc;
  }

  .sh-icon-checkbox.disabled:before {
    content: '×';
    display: inline-block;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto auto;
    color: #ffffff;
    line-height: 100%;
  }
</style>
<script>
  export default {
    name: 'sh-list-item',
    props: {
      value: {//输出值
        default: false,
        require: false,
      },
      type: String,
      scale: {//比例
        type: Array,
        default: function () {
          return [1, 1]
        },
        require: false,
      },
      col: {//列数
        type: Number,
        default: 2,
        require: false,
      },
      label: [String, Boolean],//当前值
      is_show_sub: {
        default: false,
        require: false,
      },
      disabled: String,
    },
    data() {
      return {
        this_checked: false,
        this_show_sub: false,
        this_scale: [],
        this_disabled: false,

      }
    },
    beforeMount: function () {

    },
    updated: function () {
      this.sync();
    },
    mounted: function () {
      if (this.is_show_sub == "true") {
        this.this_show_sub = true;
      }
      this.this_scale = this.scale;
      if (this.col == 3 && this.scale.length == 2) {
        this.this_scale = [this.this_scale[0], 1, this.this_scale[1]];
      }

      if (this.disabled !== undefined) {
        this.this_disabled = true;
      }
      this.sync();
    },
    methods: {
      start(){
        this.isMoving = false;
      },
      move(){
        this.isMoving = true;
      },
      sync: function () {
        if (this.value == this.label) {
          this.this_checked = true;
        } else {
          this.this_checked = false;
        }
      },
      bindClick: function () {
        if (!this.this_disabled) {
          if (this.type == 'checkbox' || this.type == 'switch') {
            this.this_checked = !this.this_checked;
            if (this.this_checked) {
              this.$emit('input', (typeof this.label === 'boolean') ? true : this.label);
            } else {
              this.$emit('input', (typeof this.label === 'boolean') ? false : '');
            }

          }
          if (this.type == 'radio') {
            this.this_checked = true;
            if (this.this_checked) {
              this.$emit('input', this.label);
            } else {
              this.$emit('input', '');
            }

          }
        } else {
          this.this_checked = false;
          this.$emit('input', '');
        }

        if (this.type == 'more') {
          this.this_show_sub = !this.this_show_sub;
        }
        this.$emit('click');
      }
    },
    watch: {},
  };
</script>
