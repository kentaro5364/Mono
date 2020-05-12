$(function(){
  var setImg = '#viewer'
  var fadeSpeed = 1500;
  var switchDelay = 5000;

  $(setImg).children('img').css({opacity:'0'});
  $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
 

  setInterval(function(){
    $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
  },switchDelay);
});


{
  const open = document.getElementById('open');
  const open1 = document.getElementById('open1');
  const  close = document.getElementById('close');
  const  close1 = document.getElementById('close1');
  const model = document.getElementById('model');
  const model1 = document.getElementById('model1');
  const mask = document.getElementById('mask');


  open.addEventListener('click',() => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click',() => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  open1.addEventListener('click',() => {
    modal1.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close1.addEventListener('click',() => {
    modal1.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click',() => {
   close1.click();
  });
  mask.addEventListener('click',() => {
   close.click();
  });

}