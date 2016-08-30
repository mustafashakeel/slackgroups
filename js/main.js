// alert("ddddd");
require.config({
	paths:{
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
	}
});
require(['app'],function(app){
	app.init();
});

// require(function(){
// 	require(['app'], function(app){

// 		app.init();
// 	});
// });