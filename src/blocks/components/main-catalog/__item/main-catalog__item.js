import $ from 'jquery';

if ($( window ).width() > 768) {
	$('body .main-catalog__items-container').on('click', '.main-catalog__item', function() {
		$(this).parents('.main-catalog__items-container').find('.main-catalog__item').removeClass('active');
		$(this).addClass('active');
	});
}


