$(function(){
		$(".xq_navbar li a").each(function(){
			if(this.href==window.location.href) {
				$(this).parent().addClass("nav-active");
			}
		})
})
