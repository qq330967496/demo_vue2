/**
 * 工具模块
 * Created by shihua.he on 2016/8/26.
 */
define(function (require,exports,module) {
    //var $ = require('zepto');

    var utils = {
        //获取url参数
        getUrlParam: function (param) {
            var t = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : null;
        },
		//获取url参数（不转码）
        getUrlParamt: function (param) {
            var t = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(t);
            return null != n ? n[2]: null;   //不转码
        },
        queryToken: function (key) {
            return (document.location.href.match(new RegExp("(?:\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
        },
        //获取url参数json（不转码）
        getUrlParamsJson: function (paramArr) {
            _self = this;
            var valueJson = {};
            var jsonStr = "{";
            if (paramArr != null && paramArr.length != 0) {
                paramArr.forEach(function (param) {
                    var value = _self.getUrlParamt(param);
                    if (value != null && value != "") {
                        jsonStr += param + ":'" + value + "',";
                    }else{
                        jsonStr += param + ":'',";
                    }
                });
            } else {
                return "{}";
            }
            jsonStr += '}';
            valueJson = eval('(' + jsonStr + ')');
            return valueJson;
        },
        //字体自适应
        adaptive: function (num, width) {
            var screenWid = document.documentElement.clientWidth;
            var fixWid = 375;
            screenWid = screenWid > 750 ? 750 : screenWid;
            var htmlFontSize = (screenWid / fixWid) * 20;
            document.documentElement.style.fontSize = htmlFontSize + 'px';
        },
        //获取前缀（其实是后缀）
        getPrefix: function () {
            if (window.location.host.toString().split('-').length <= 1) return '';
            var prefix = window.location.host.toString().split('-')[1].split('.')[0];
            if (prefix) {
                prefix = '-' + prefix;
            } else {
                prefix = '';
            }
            return prefix;
        },
        //设置cookie（名称，值，时间[单位：天]）
        setCookie: function (name, value, time) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + time);
            document.cookie = name + "=" + value + ";expires=" + oDate;
        },
        //获取cookie
        getCookie: function (name) {
            var arr = document.cookie.split("; ");
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split("=");
                if (arr2[0] == name) {
                    return arr2[1];
                }
            }
            return "";
        },
        //移除cookie
        removeCookie: function (name) {
            this.setCookie(name, "", 0);
        },
        //获取url查询字符串
        queryString: function (key) {
            return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
        },
        queryToken: function (key) {
            return (document.location.href.match(new RegExp("(?:\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
        },
        //替换电话号码4到7位成*号
        replacePhone: function (key) {
            return key.substr(0, 3) + '****' + key.substr(7);
        },
        //去除url查询字符串
        urlpage: function () {
            return (location.href.replace(document.location.search, ""));
        },

        //百度地图定位（城市，地址）
        baiduMap: function (city, addr) {
            var map = new BMap.Map("allmap"),
                defaultPoint = new BMap.Point(116.331398, 39.897445);//默认地址
            map.centerAndZoom(defaultPoint, 12);
            map.disableDragging();
            var myGeo  = new BMap.Geocoder;
            myGeo .getPoint(addr, function (e) {
                e && (map.centerAndZoom(e, 16), map.addOverlay(new BMap.Marker(e)))
            }, city);
        },

        //百度统计模块
        hmBaidu : function(){
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?872c315926bb6fcef89e31f700bf1a3a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        },

        //移动端环境判断
        ua: navigator.userAgent,
        url: window.location.href,
        //分享
        isShare: function () {
            return this.url.match(/petShareFrom/i);
        },
        //移动
        isMobile: function () {
            return this.ua.match(/AppleWebKit.*Mobile/i);
        },
        //ios
        isIos: function () {
            return this.ua.match(/iPhone|iPod|iPad/i);
        },
        //安卓
        isAndroid: function () {
            return this.ua.match(/Android/i)
        },
        //微信
        isWeixin: function () {
            return this.ua.match(/MicroMessenger/i);
        },
        //警告对话框
        alert: function (obj, callback) {
            var content = obj.content || String(obj) || "",
                btnText = obj.btnText || "确定",
                boxClass = obj.boxClass || "",
                alertHtml = '\
                <div class="dialog ' + boxClass + '">\
                    <div class="dialog-box">\
                        <div class="dialog-detail">' + content + "" + '</div>\
                        <div class="dialog-opera">\
                            <button class="dialog-btn dialog-btn-close">' + btnText + '</button>\
                        </div>\
                    </div>\
                    <div class="dialog-overlay"></div>\
                </div>';
            //document.body.insertAdjacentHTML("beforeend", alertHtml);
            $(".dialog").remove();
            $("body").append(alertHtml);
            var dialog = $(".dialog"),
                btnClose = $(".dialog-btn-close");
            btnClose.on("click", function () {
                dialog.remove();
                if (callback) {
                    callback();
                }
            });
        },
        //确认对话框
        confirm: function (obj, callback) {
            var content = obj.content || String(obj) || "",
                okText = obj.okText || "确定",
                cancelText = obj.cancelText || "取消",
                boxClass = obj.boxClass || "",
                confirmHtml = '\
                <div class="dialog ' + boxClass + '">\
                    <div class="dialog-box">\
                        <div class="dialog-detail">' + content + "" + '</div>\
                        <div class="dialog-opera">\
                            <button class="dialog-btn dialog-btn-ok">' + okText + '</button>\
                            <button class="dialog-btn dialog-btn-cancel">' + cancelText + '</button>\
                        </div>\
                    </div>\
                    <div class="dialog-overlay"></div>\
                </div>';
            $(".dialog").remove();
            $("body").append(confirmHtml);
            var dialog = $(".dialog"),
                btnOk = $(".dialog-btn-ok"),
                btnCancel = $(".dialog-btn-cancel"),
                flag = true,
                oprea = function () {
                    dialog.remove();
                    if (callback) {
                        callback(flag);
                    }
                };
            btnOk.on("click", function () {
                flag = true;
                oprea();
            });
            btnCancel.on("click", function () {
                flag = false;
                oprea();
            });
        },
        //提示对话框
        prompt: function (obj, callback) {
            var content = obj.content || String(obj) || "",
                boxClass = obj.boxClass || "",
                delay = obj.delay || 2000,
                msgHtml = '<div class="dialog-prompt ' + boxClass + '">' + content + '</div>';
            $(".dialog-prompt").remove();
            $("body").append(msgHtml);
            var prompt = $(".dialog-prompt"),
                promptWidth = prompt.width(),
                wiWidth = $(window).width();
                prompt.css({"margin-left": -promptWidth * 0.5});
            // if (wiWidth / 2 == promptWidth) {
            //     prompt.css({"margin-left": -promptWidth * 0.725});
            // } else {
            //     prompt.css({"margin-left": -promptWidth * 0.5});
            // }
            if (delay < 0) return;
            setTimeout(function () {
                prompt.css({"opacity": 0});
                setTimeout(function () {
                   // prompt.remove();
                    if (callback) {
                        callback();
                    }
                }, 500);
            }, delay);
        }
    };

    module.exports = utils;
});