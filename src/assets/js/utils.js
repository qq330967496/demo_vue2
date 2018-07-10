const utils = {
  /**
   * 字体自适应
   */
  adaptive() {
    var screenWid = document.documentElement.clientWidth;
    var fixWid = 375;
    screenWid = screenWid > 750 ? 750 : screenWid;
    var htmlFontSize = (screenWid / fixWid) * 20;
    document.documentElement.style.fontSize = parseInt(htmlFontSize) + 'px';
  },
  setHeader(obj){
    if(typeof obj == "object"){
      this.$parent.$parent.$refs.header.this_title = obj.title;
      this.$parent.$parent.$refs.header.this_left_text = obj.left_text;
      this.$parent.$parent.$refs.header.this_right_text = obj.right_text;
    }else{
      throw new TypeError('设置头部参数必须是一个对象');
    }
  },
};
export default utils;
