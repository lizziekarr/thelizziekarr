(function(){

$(document).ready(function(){



$('.story-link').on('click', function(){
  $('.page').hide();
  $('.stories').css('display', 'flex');
  $('.stories .title').each(function(i){
    setTimeout(function() {
    $('.stories .title').eq(i).addClass('is-showing');
  }, 150 * (i+.5));
});
});

$('.project-link').on('click', function(){
  $('.page').hide();
  $('.projects').show();
  $('.pink-line').addClass('loaded');
  $('.projects img').addClass('loaded');
});

$('.contact-link').on('click', function(){
  $('.contact').fadeToggle('slow');
});

$('.stories .exit').on('click', function(){
  $('.page').hide();
  $('.home').show();
});

$('.projects .exit').on('click', function(){
  $('.page').hide();
  $('.home').show();
});

});

})();
