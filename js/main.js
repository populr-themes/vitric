$(document).on('pop-initialized', function(){

	$(window).scroll(function(e) {
    console.log('scroll');
    var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;

    if (!window.bg_bounds) {
      window.bg_bounds = $("#background-image").position();
    } else {
      $('.fullbg-container img').css('position','relative').css('top', window.bg_bounds.top-document.body.scrollTop/3 + 'px');
    }

    if (!window.backgroundPos) {
      var background_position = $('body').css('background-position');
      if (background_position) {
        window.backgroundPos = background_position.split(" ");
        window.xbg = window.backgroundPos[0];
        window.ybg = window.backgroundPos[1];
      }
    } else {
      $('body').css('background-position', window.xbg + ' ' + window.ybg+document.body.scrollTop/3 + 'px');
    }

    $('#pop-title').css('position','relative').css('top', '-' + posY/1.5 + 'px');
    $('#pop-logo') .css('position','relative').css('top', '-' + posY/1.5 + 'px');
  });

  $("#tag").appendTo("#main");

  //  $('.asset').live('initialize', function(e, asset){

	// 	$("a.fancybox").fancybox();

	// }).live('destroy', function(e, asset){
	// 	$("a.fancybox").fancybox();

  //  });

});