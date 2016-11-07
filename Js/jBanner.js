$(document).ready(function() {
	function loadBanner(banner){
		var bannerAtual;
		var bannerInicial;
		var btnInicial;
		var btnAtual;
		var timer;
		$('<div class="nav-btns" style=""></div>').appendTo(banner);
		var ul = banner.children("ul");
		ul.children("li").each(function() {
			$('<div class="nav-btn"></div>').appendTo(banner.children(".nav-btns"));
		});
		btnInicial = banner.children(".nav-btns").children().first();
		btnAtual = btnInicial;
		btnAtual.addClass("current-slide");
		bannerInicial = ul.children().first();
		bannerAtual = bannerInicial;
		bannerAtual.show();
		timer = startClock();
		$(".nav-btn").click(function() {
			var ul = banner.children("ul");
			if($(this)!= null){
				btnAtual = $(this);
			}
			var idx = $(this).index();
			if(ul.children("li:eq(" + idx + ")") != null){
				bannerAtual = ul.children("li:eq(" + idx + ")");
			}
			banner.children(".nav-btns").children().removeClass('current-slide');
			btnAtual.addClass("current-slide");
			bannerAtual.fadeIn("slow");
			ul.children("li").each(function() {
				if(bannerAtual.index() != $(this).index()){
					$(this).fadeOut("slow");
				}
			});
			clearInterval(timer);
			timer = startClock();
		});
		function startClock(){
		return setInterval(rotation, 3000);
		}
		function rotation() {
				var ul = banner.children("ul");
				if(bannerAtual.index() != ul.children("li:last").index()){
					bannerAtual = bannerAtual.next();
					btnAtual = btnAtual.next();
				}
				else{
					bannerAtual = bannerInicial;
					btnAtual = btnInicial;
				}
				banner.children(".nav-btns").children().removeClass('current-slide');
				btnAtual.addClass("current-slide");
				bannerAtual.fadeIn("slow");
				ul.children("li").each(function() {
					if(bannerAtual.index() != $(this).index()){
						$(this).fadeOut("slow");
					}
				});
			}
	}
	$(".jBanner").each(function() {
		loadBanner($(this));
	});
});
