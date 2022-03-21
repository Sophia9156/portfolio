$('.intro').load('intro.html .box', introFun);

function introFun() {

  $('.skip').on('click', () => {
    $('.intro').css('display', 'none');
  })
  
  setTimeout(() => {
    $('.intro').css('display', 'none');
  }, 9500)
}