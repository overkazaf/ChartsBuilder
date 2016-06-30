/**
 * [description]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T02:14:57+0800
 * 任务分发器， 这里起到中介者的作用，将应用中的所有命令托管给Dispatcher分发
 */
define(function (require){

	var $ = require('jquery');


	function Dispatcher(toolbar, ctrlPanel, playGround){
		this.__toolbar = toolbar;
		this.__ctrlPanel = ctrlPanel;
		this.__playGround = playGround;


	};


	var commandGroup = {
		'Grid' : {
			'add' : function (){},
			'remove' : function (){},
			'update' : function(){}
		},
		'Ctrl' : {

		},
		'Operation' : {

		}
	};

	var gridster;
	Dispatcher.prototype = {
		constructor : Dispatcher,
		init : function () {
			
			gridster = $('.gridster > ul').gridster({
				widget_margins:[5,5],
				widget_base_dimensions : [50,50],
				min_cols : 6,
				resize : {
					enabled : true
				}
			}).data('gridster');
		},
		boot : function () {
			this.init();
			$('#addLayout').on('click', function (){
				var widget = ['<li><h2>New Layout</h2></li>', 2,2];

				gridster.add_widget.apply(gridster, widget);
			});


			$('#addAnimation').on('click', function () {
				var $first = $('.gridster > ul').find('li:first');
				$first.addClass('animated bounceOutLeft');

				$first.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (){
					$(this).removeClass('animated bounceOutLeft');
				});
			});
		},
		watch : function (el) {

		}
	}


	return Dispatcher;
});