define(
	[
		'jquery', 
		'gridster' , 
		'ToolBar', 
		'ControlPanel',
		'PlayGround',
		'Dispatcher'
	], function ($, gridster, ToolBar, ControllerPanel, PlayGround, Dispatcher){
	
	function ChartBuilder(){};

	ChartBuilder.prototype = {
		constructor : ChartBuilder,
		init : function (){
			this.toolbar = new ToolBar();
			this.controlPanel = new ControllerPanel();
			this.playGround = new PlayGround();

			this.dispatcher = new Dispatcher(this.toolbar, this.controlPanel, this.playGround);
		}
	};

	return new ChartBuilder();
});