$('.intro').load('intro.html .box', introFun);

function introFun() {
  setTimeout(() =>{
    $('.intro').css('display', 'none');
  }, 9500)
}