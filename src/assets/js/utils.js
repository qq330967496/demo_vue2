const utils = {
  /**
   * 字体自适应
   */
  adaptive: function () {
    var screenWid = document.documentElement.clientWidth;
    var fixWid = 375;
    screenWid = screenWid > 750 ? 750 : screenWid;
    var htmlFontSize = (screenWid / fixWid) * 20;
    document.documentElement.style.fontSize = parseInt(htmlFontSize) + 'px';
    // document.documentElement.style.fontSize = htmlFontSize + 'px';
    window.onresize = function () {
      utils.adaptive();
    }
  },
};
export default utils;
