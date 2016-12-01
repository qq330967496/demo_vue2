/**
 * Created by Sever on 2016/10/26.
 */
var utils = {

    argStrToJson:function(argStr){
        if(!argStr) return {};

        var argArr = argStr.split('&');
        var argJson = {};
        var jsonStr = '{';
        for(var i in argArr){
            var str = argArr[i].split('=');
            jsonStr += '"'+str[0]+'":"'+str[1]+'",';
        }
        jsonStr = jsonStr.substring(0,jsonStr.length-1);
        jsonStr+='}';
        return JSON.parse(jsonStr);
    }
}

module.exports = utils;



