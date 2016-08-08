/**
 * [description]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2016-06-27T10:02:31+0800
 *
 * 这个是程序主入口模块，程序中的所有模块交互都通过Dispatcher分发, 模块间解藕
 */
define(
	[
		'jquery', 
		'gridster' , 
		'ToolBar', 
		'ControlPanel',
		'PlayGround',
		'Dispatcher'
	], function (
		$, 
		gridster,
		ToolBar, 
		ControlPanel, 
		PlayGround, 
		Dispatcher) {
	
	function ChartBuilder(){};

	ChartBuilder.prototype = {
		constructor : ChartBuilder,
		init : function (){
			this.toolbar = new ToolBar();
			this.controlPanel = new ControllerPanel();
			this.playGround = new PlayGround();
			this.dispatcher = new Dispatcher(this.toolbar, this.controlPanel, this.playGround);

			// 启动dispatcher
			this.dispatcher.boot();
		}
	};

	return new ChartBuilder();
});