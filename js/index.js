$(document).ready(function(){
	$(".more").click(function(){
		$(".more").hide();
		$(".1th").append('<a class="img300" data-lightbox="photos" data-title="Отделка фасада белым камнем загородного дома. Окна." rel="group" href="images/photos/1642.jpg"><img src="images/photos/1642.jpg" alt="" /></a><br>');
		$(".2th").append('<a class="img300" data-lightbox="photos" data-title="Отделка камнем жилого комплекса. Вид вблизи." rel="group" href="images/photos/1650.jpg"><img src="images/photos/1650.jpg" alt="" /></a><br>');
		$(".3th").append('<br><a class="  img300" data-lightbox="photos" data-title="Отделка камнем жилого комплекса. Вид вблизи." rel="group" href="images/photos/1652.jpg"><img src="images/photos/1652.jpg" alt="" /></a>');
		$(".4th").append('<a class="  img300"  data-lightbox="photos" data-title="Отделка гранитом барной стойки. Колонада в Ялте." rel="group" href="images/photos/kolonada_bar.jpg"><img src="images/photos/kolonada_bar.jpg" alt="" /></a><br>');
		$(".1th").append('<a class="img300" data-lightbox="photos" data-title="Отделка фасада белым камнем загородного дома. Задняя часть." rel="group" href="images/photos/1643.jpg"><img src="images/photos/1643.jpg" alt="" /></a><br>');
		$(".2th").append('<a class="img300" data-lightbox="photos" data-title="Отделка камнем жилого комплекса. Общий вид." rel="group" href="images/photos/1649.jpg"><img src="images/photos/1649.jpg" alt="" /></a><br>');
		$(".3th").append('<br><a class="  img300" data-lightbox="photos" data-title="Каменная башня." rel="group" href="images/photos/666.jpg"><img src="images/photos/666.jpg" alt="" /></a>');
		$(".4th").append('<a class="  img300"  data-lightbox="photos" data-title="Отделка гранитом барной стойки. Колонада в Ялте." rel="group" href="images/photos/4.jpg"><img src="images/photos/4.jpg" alt="" /></a><br>');
		$(".2th").append('<a class="  img300"  data-lightbox="photos" data-title="Отделка гранитом барной стойки. Колонада в Ялте." rel="group" href="images/photos/1651.jpg"><img src="images/photos/1651.jpg" alt="" /></a><br>');
		$(".1th").append('<a class="img300" data-lightbox="photos" data-title="Отделка фасада белым камнем загородного дома. Окно." rel="group" href="images/photos/1636.jpg"><img src="images/photos/1636.jpg" alt="" /></a><br>');
		$(".2th").append('<a class="img300" data-lightbox="photos" data-title="Отделка камнем жилого комплекса. Общий вид." rel="group" href="images/photos/668.jpg"><img src="images/photos/668.jpg" alt="" /></a><br>');
		$(".3th").append('<br><a class="  img300" data-lightbox="photos" data-title="Каменная башня." rel="group" href="images/photos/1635.jpg"><img src="images/photos/1635.jpg" alt="" /></a>');
		$(".4th").append('<a class="img300" data-lightbox="photos" data-title="Отделка камнем жилого комплекса. Общий вид." rel="group" href="images/photos/667.jpg"><img src="images/photos/667.jpg" alt="" /></a><br>');
	});
});


$(function() {





	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);


	jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

	
});
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });


});




$(document).ready(function() {
	 
	$('body').append('<div class="button-up" style="display: none;opacity: 0.7;width: 80px;height:100%;position: fixed;left: 0px;top: 0px;cursor: pointer;text-align: center;line-height: 100px;color: #45688E;"><b>^ Наверх</b></div>');
	 
	$ (window).scroll (function () {
	if ($ (this).scrollTop () > 300) {
	$ ('.button-up').fadeIn();
	} else {
	$ ('.button-up').fadeOut();
	}
	});
	 
	$('.button-up').click(function(){
	$('body,html').animate({
	scrollTop: 0
	}, 100);
	return false;
	});
	 
	$('.button-up').hover(function() {
	$(this).animate({
	'opacity':'1',
	}).css({'background-color':'#E1E7ED','color':'#45688E'});
	}, function(){
	$(this).animate({
	'opacity':'0.7'
	}).css({'background':'none','color':'#45688E'});;
	});
	 
});
