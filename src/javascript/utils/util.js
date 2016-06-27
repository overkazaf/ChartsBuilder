/**
 * [常用工具模块]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T15:12:04+0800
 */
define(function (){

	var cache = window.__data__ || {};


	var Util = {
		cache : {
			get : function (){},
			set : function (){},
			remove : function (){}
		},
		clone : function (obj) {
			if (typeof obj !== 'object') return obj;
			else {
				var ret = new obj.constructor();
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						ret[key] = Util.clone(obj[key]);
					}
				}
				return ret;
			}
		}
	};


	return Util;
});