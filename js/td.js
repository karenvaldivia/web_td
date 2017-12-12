function menu(){
	var w = $(window).width();
	if($(this).scrollTop() > 10) {
		$('.navbar').addClass('navbar-scroll').removeClass('navbar-start');
		$('.navbar').css('background','white');
		$('.navbar-nav li a').css('color','#31AAD5');

		// $('.navbar-brand img').attr('src', 'images/km-logos/km-logo-negro.png');
		// $('.navbar-toggle img').attr('src', 'images/km-navbar-mobile-negro.svg');
		// $('.nav li a').css('padding','10px 15px 8px');
		// $('.navbar-brand>img').css('height','40px');
		// $('.nav li:first-child a').addClass('pd-tb11');
		// $('.nav-login').addClass('dnone');
		// $('.navbar').css('padding-top', '15px');
		// if( w >= 768 ){
		// 	$('a.km-nav-link, .nav-login li a').css('color','black');
		// }
	} else {
		$('.navbar').addClass('navbar-start').removeClass('navbar-scroll');
		$('.navbar').css('background','transparent');
		$('.navbar-nav li a').css('color','white');
		// $('.nav>li>a:hover').css('color','red');

		// $('.navbar-brand img').attr('src', 'images/km-logos/km-logo.png');
		// $('.navbar-toggle img').attr('src', 'images/km-navbar-mobile.svg');
		// $('.nav li a').css('padding','19px 15px 15px');
		// $('.navbar-brand>img').css('height','60px');
		// $('.nav li:first-child a').removeClass('pd-tb11');
		// $('.nav-login').removeClass('dnone');
		// $('.navbar').css('padding-top', '30px');
		// if( w >= 768 ){
		// 	$('a.km-nav-link, .nav-login li a').css('color','white');
		// }
	}
}
$(document).ready(function(){
	menu();
	$(window).scroll(function() {
		menu();
	});


	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$(function () {
		$('#myTab a:first').tab('show');
	})

	// $('.your-class').slick({
	// 	dots:true
	// });
});