$('header').load('header-footer.html .header', headerFun);
$('footer').load('header-footer.html .footer', footerFun);
$('.goToTop').load('header-footer.html .arrow', arrowFun);
$('.contactWrap').load('header-footer.html .contact', contactFun);

function headerFun() {
  // 메뉴 토글
  $('.header h1').on('click', function() {
    $('.subMenu').toggleClass('active');
  });
  $('.burger').on('click', function() {
    $('.mainMenu').toggleClass('active');
    $('.burger').toggleClass('active');
  });


  // 링크 이동
  $('.homeBtn').on('click', function() {
    $('.loading').css({
      display: 'block'
    });
    setTimeout(() => {
      location.href = './index.html'
    },1500)
  })
  $('.aboutBtn').on('click', function() {
    $('.loading').css({
      display: 'block'
    });
    setTimeout(() => {
      location.href = './about.html'
    },1500)
  })
  $('.worksBtn').on('click', function() {
    $('.loading').css({
      display: 'block'
    });
    setTimeout(() => {
      location.href = './works.html'
    },1500)
  })


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
  $('.goToTop').on('mouseenter', function() {
    $('.cursor').addClass('active');
  });
  $('.goToTop').on('mouseleave', function() {
    $('.cursor').removeClass('active');
  });
  $('.contactWrap').on('mouseenter', function() {
    $('.cursor').addClass('active');
  });
  $('.contactWrap').on('mouseleave', function() {
    $('.cursor').removeClass('active');
  });
  $('.clockWrap').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.clockWrap').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
  $('.description').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.description').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
  $('.resume').on('mouseenter', function() {
    $('.cursor').addClass('fadeout');
  });
  $('.resume').on('mouseleave', function() {
    $('.cursor').removeClass('fadeout');
  });
}

function arrowFun() {
  window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight * 0.8){
      $('.goToTop').addClass('active');
    } else {
      $('.goToTop').removeClass('active');
    }
  });
  $('.goToTop').on('click', () => {
    window.scrollTo({
      top: 0,
    })
  });
}

function contactFun() {
  $('.contactWrap').on('click', () => {
    $('.contactBox').toggleClass('active')
  })
}

function footerFun() {
  const date = new Date();
  $('.year').text(date.getFullYear());
}
