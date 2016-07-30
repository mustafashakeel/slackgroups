// alert("ddddd");
require.config({
	paths:{
		jquery:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js'
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