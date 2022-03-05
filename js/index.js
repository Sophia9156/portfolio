// Clock
const date = new Date();
const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
$('.calendar .day1').text(`${date.getFullYear()} ${month[date.getMonth()]} ${date.getDate()} `);
$('.calendar .day2').text(`${day[date.getDay()]}`);

function modifyNumber(time) {
  if(parseInt(time) < 10){
    return "0" + time;
  }
  return time;
}

setInterval(() => {
  const time = new Date();
  $('.clock').text(`${modifyNumber(time.getHours())} : ${modifyNumber(time.getMinutes())} : ${modifyNumber(time.getSeconds())}`)
}, 100);

if(date.getDay() === 0 || date.getDay() === 6){
  $('.day2').css({
    backgroundColor: 'rgb(253, 29, 29)'
  });
} else {
  $('.day2').css({
    backgroundColor: 'rgb(58,75,180)'
  });
}


// main greeting
const textBox = document.querySelector('.textBg');

window.addEventListener('mousemove', function(e) {
  if(e.clientX > textBox.offsetWidth + 500){
    $('.textBox').css({
      left: textBox.offsetWidth - 100,
      top: e.clientY - 500
    })
  } else if(e.clientX < textBox.offsetLeft + 400) {
    $('.textBox').css({
      left: textBox.offsetLeft - 100,
      top: e.clientY - 500
    })
  } else {
    $('.textBox').css({
      left: e.clientX - 500,
      top: e.clientY - 400
    })
  }
});

