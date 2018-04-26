$(function() {

	function modalController(target) {
		if (target == 'close') {
			$('.modal-container').removeClass('active');
			$('.modal-container .modal').removeClass('active');
		} else {
			$('.modal-container').addClass('active');
			$('.modal-container .modal' + target).addClass('active');
		}
	}

    $('[data-modal]').click(function() {
		var target = $(this).attr('data-modal');
		console.log(target);
		modalController(target);
	});

	$('[data-tab]').click(function() {
		var target = $(this).attr('data-tab');
		console.log(target);
		$('.tab-container .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-container .content').removeClass('active');
		$('.tab-container .content' + target).addClass('active');
	});

});
