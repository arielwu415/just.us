$(document).ready(function(){
	$(".alt-nav").click(function(){
		if ( $(this).hasClass("active-click")){
			$(this).removeClass("active-click");
			$(".small-nav > ul").slideUp();
		}
		else {
			$(".small-nav > ul").slideUp();
			$(this).removeClass("active-click");
			$(this).addClass("active-click");
			$(".small-nav > ul").slideDown();
			return false;
		}
	});
});