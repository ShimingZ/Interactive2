var slideTotal = $('.slides .slide').length,
    slidesWidth = $('.slides .slide').width(),
    maxMargin = -slideTotal * slidesWidth + slidesWidth,
    pos = 0,
    curSlide = 0,
    autoOff = false;

$(function(){
  $('.slidesContainer').width(slidesWidth * slideTotal);
  
  $('.slides .slide').each(function(){
    $('.buttons').append('<li></li>');
  });
  
  slideLoop();
  
  $('.buttons li').click(function(){
      $('.slidesContainer').stop();
      autoOff = true;
      curSlide = $(this).index() +1;
      $('.buttons li').removeClass('active');
      $(this).addClass('active');
      $('.slidesContainer').animate({ marginLeft: -slidesWidth * curSlide + slidesWidth + 'px' }, 500);
  });
});

function slideLoop(){
  if(autoOff === false){
    pos = -slidesWidth * curSlide + slidesWidth;
    if(pos <= maxMargin){
      pos = 0;
      curSlide=1;
    } else {
      pos = pos - slidesWidth; 
      curSlide++;
    }
  
    $('.buttons li').removeClass('active');
    $('.buttons li:nth-of-type(' + curSlide + ')').addClass('active');
    $('.slidesContainer').animate({ marginLeft: pos + 'px' }, 500, function(){
      setTimeout(function(){ slideLoop() }, 3000);
    });
  }
}