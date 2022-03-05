$('header').load('header-footer.html .header', headerFun);
$('footer').load('header-footer.html .footer', footerFun);

function headerFun() {
  // 메뉴 토글
  $('.header h1').on('click', function() {
    $('.subMenu').toggleClass('active');
  });
  $('.burger').on('click', function() {
    $('.mainMenu').toggleClass('active');
    $('.burger').toggleClass('active');
  });


  // 커서 따라다니는 동작
  window.addEventListener('mousemove', function(e) {
    $('.cursor').css({
      left: e.clientX - 30,
      top: e.clientY - 30
    })
  });

  // 커서 호버 시 동작
  $('.header h1').on('mouseenter', function() {
    $('.cursor').addClass('active');
  });
  $('.header h1').on('mouseleave', function() {
    $('.cursor').removeClass('active');
  });
  $('.subMenu a').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.subMenu a').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
  $('.burger').on('mouseenter', function() {
    $('.cursor').addClass('active');
  });
  $('.burger').on('mouseleave', function() {
    $('.cursor').removeClass('active');
  });
  $('.mainMenu').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.mainMenu').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
  $('.clockWrap').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.clockWrap').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
}

function footerFun() {
  const date = new Date();
  $('.year').text(date.getFullYear());
}
