function time(){
  if(Math.abs(current_y - target_y) target_y){
  speed = -(speed);
  }
  timer = setInterval('time()',smooth);
  return false;
  }
  function act(){
  var a = document.querySelectorAll('a[href^="#"]');
  for(var i=0; i < a.length; i++){
  a[i].onclick = function(){
  move(this);
  return false;
  }
  }
  }
  window.addEventListener('DOMContentLoaded',act,false);