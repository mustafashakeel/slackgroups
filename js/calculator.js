define(function(){

function calc(x,y,opp){
console.log("--",opp,"--");
 return  opp(x,y);

	
};

 function add(x,y){
	return parseInt(x+y);
};
function sub(x,y){
	return parseInt(x-y);
}
function div(x,y){
	return x/y;
}



return calc;

});