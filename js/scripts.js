$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1 + 2);
        return false;
    })

    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })
    $('input[type=file]').on('change', function () {
        var fileName = ('' + $(this).val()).replace(/^.*[\ \/]/, '');
        //if (fileName.length > 15) {
            //fileName = fileName.substring(0, 15) + '...';
        //}
        if (fileName == "") {
            fileName = $(this).parent().find('.btn-action-file').attr('data-title');
        }
        $(this).parent().find('.js-file-button').html(fileName);
    });
    
    
    //faq
    $('.item-faq .btn-faq').on('click', function() {
        $(this).parent().toggleClass('opened');
        return false;
    })
    
    $('.js-popup-close').on('click', function() {
        $('.js-popup').removeClass('active');
        $('body').removeClass('popup-open');
        return false;
    })
	$('.js-popup-open').on('click', function() {
        let popupActive = $(this).attr('data-popup');
        $('body').addClass('popup-open');
        $('.popup-box[data-popup="'+popupActive+'"]').addClass('active');
        return false;
    })
    
    $('.frm-row').on('click', '.js-button-add', function() {
        if ($(this).hasClass('active')) {
            $(this).parents('.frm-row').remove();
        } else {
            $(this).parents('.frm-row').clone(true).appendTo($(this).parents('.frm-rows-wrap'));
            $(this).addClass('active');
        }
        return false;
    })
});


