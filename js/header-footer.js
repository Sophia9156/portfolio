$('header').load('header-footer.html .header', headerFun);
$('footer').load('header-footer.html .footer', footerFun);

function headerFun() {
  $('.header h1').on('click', function() {
    $('.subMenu').toggleClass('active');
  });
  $('.burger').on('click', function() {
    $('.mainMenu').toggleClass('active');
    $('.burger').toggleClass('active');
  })
}

function footerFun() {
  const date = new Date();
  $('.year').text(date.getFullYear());
}
