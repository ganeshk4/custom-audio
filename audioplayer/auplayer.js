$(document).ready(function() {

	var replaceThese = $('div[is="au"]');
	
	replaceThese.each(function(){
		var othis = this;
		var myStyle = "<style>.wrapper{height: 50px;width: 200px;} \
		.play{height: 50px;width: 50px;} \
		.pause{height: 50px;width: 50px;}</style>";
		var shadow = this.createShadowRoot();
		var style = $(this).attr('style');
		shadow.innerHTML = myStyle + "<style>" + style + "</style><div class='wrapper'><div class='play'></div><div class='pause'></div><audio> <source src='horse.mp3' type='audio/mpeg'></source></audio><div>";
	
	debugger;
	
	
	});
	
});