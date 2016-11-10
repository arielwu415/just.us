$(document).ready(function(){
	$(".ptitle").click(function(){
		if ( $(this).hasClass("active-click")){
			$(this).removeClass("active-click");
			$(".ptitle > p").slideUp();
		}
		else {
			$(".ptitle > p").slideUp();
			$(this).removeClass("active-click");
			$(this).addClass("active-click");
			$(".ptitle > p").slideDown();
			return false;
		}
	});
});