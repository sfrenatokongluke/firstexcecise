$(function(){
	var q = $("#CarCount").text();
	var i = parseInt(q);
	if(i>99){
		$("#CarCount").text("...");
	}
});