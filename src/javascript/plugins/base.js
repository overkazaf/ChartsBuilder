define(function (require){
	var $ = require('jquery');

	function Base (option) {
		this.__option = option;
		this.__data = {};
	};

	Base.prototype = {
		constructor : Base,
		init : function () {
			// 配置初始化参数
		},
		config : function (data) {
			// 附加数据
			$.extend(this.__data, data||{});
		},
		reset : function () {},
		update : function () {},
		destory : function () {}
	};



	return Base;
});