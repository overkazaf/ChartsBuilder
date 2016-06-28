define(function (require){
	var $ = require('jquery');

	var __defaults = {
		id : 'toolbar',
		template : toolbarTpl(),
		data : {}
	};

	function ToolBar(options){
		this.__options = options || __defaults;
		this.init();
	};


	function toolbarTpl () {
		var ret = [];

		ret.push('<a class="menu-item"><i class="fa fa-file"></i> File</a>');
		ret.push('<a class="menu-item"><i class="fa fa-eye"></i> View</a>');
		ret.push('<a class="menu-item"><i class="fa fa-cog"></i> Settings</a>');
		ret.push('<a class="menu-item"><i class="fa fa-question-circle-o"></i> Help</a>');

		return ret.join('');
	}

	ToolBar.prototype = {
		constructor : ToolBar,
		init : function () {
			var opt = this.__options;
			var $el = $('#' + opt.id);
			$el.html(opt.template);

		}
	};

	return ToolBar;
});