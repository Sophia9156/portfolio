$('header').load('header-footer.html .header', headerFun);
$('footer').load('header-footer.html .footer', footerFun);

function headerFun() {
  $('.header h1').on('click', function() {
    $('.subMenu').toggleClass('active');
  })
}

function footerFun() {
  const date = new Date();
  $('.year').text(date.getFullYear());
}
