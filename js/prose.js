$(document).ready(function(){
	$(".ptitle").click(function(){
		if ( $(this).hasClass("active-click")){
			$(this).removeClass("active-click");
			$(".ptitle > ul").slideUp();
		}
		else {
			$(".ptitle > ul").slideUp();
			$(this).removeClass("active-click");
			$(this).addClass("active-click");
			$(".ptitle > ul").slideDown();
			return false;
		}
	});
});