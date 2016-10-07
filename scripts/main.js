$(document).ready(function() {
  var box = document.getElementById('scrollpoint');
  if (box != null) {
    $('.box').animatescroll({padding: 150, scrollSpeed:2000, easing: 'easeInOutBack'});
  }
});

$(function(){
  $("#typed").typed({
    strings: ["BECAUSE EVERYTHING IS <b>AWESOME</b>."],
    typeSpeed: 50,
    backDelay: 500,
    loop: false,
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false
  });
});

$.fn.scrollView = function () {
  return this.each(function () {
    $("html, body").animatescroll({padding: 150, scrollSpeed:2000, easing: 'easeInOutBack'});
  });
}

$(document).ready(function() {
  $('#slickbox').hide();
 // shows the slickbox on clicking the noted link  
  $('#slick-show').click(function() {
    $('#slickbox').slideDown('slow');
    return false;
  });
 // hides the slickbox on clicking the noted link  
  $('#slick-hide').click(function() {
    $('#slickbox').slideUp('slow');
    return false;
  });
  $('#slick-toggle').click(function() {
    $('#slickbox').slideToggle(400);
    return false;
  });
});
