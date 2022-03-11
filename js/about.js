const skillContainer = document.querySelector('.skillContainer');
const skillDetail = document.querySelector('.skills-detail');
let list = '';
let detail = '';

async function changeData() {
  await fetch('data.json')
  .then(data => data.json())
  .then(data => {
    data.skills.forEach(skill => {
      list += `
      <li>
        <img src="${skill.thumb}" alt="skill" />
      </li>
      `;
      skillContainer.innerHTML = list;
    });

    const skills = document.querySelectorAll('.skillContainer li');
    skills[0].classList.add('active');
    detail = `
    <li>${data.skills[0].detail}</li>
    `;
    skillDetail.innerHTML = detail;

    skills.forEach((skill, index) => {
      skill.addEventListener('click', () => {
        for(let i = 0; i < skills.length; i++){
          skills[i].classList.remove('active');
        }
        skill.classList.add('active');
        detail = `
        <li>${data.skills[index].detail}</li>
        `;
        skillDetail.innerHTML = detail;
      });
    })
  })
}

changeData();


// 스크롤 시 타이틀 애니메이션
window.onscroll = () => {
  if(skillDetail.offsetTop < window.scrollY && skillDetail.offsetTop + 100 >= window.scrollY){
    skillDetail.style.transform = 'scale(0.4) translate(15rem, -17rem)';
  } else if (skillDetail.offsetTop + 100  < window.scrollY && skillDetail.offsetTop + 200 >= window.scrollY) {
    skillDetail.style.transform = 'scale(0.5) translate(17rem, -15rem)';
  } else if (skillDetail.offsetTop + 200 < window.scrollY && skillDetail.offsetTop + 300 >= window.scrollY) {
    skillDetail.style.transform = 'scale(0.7) translate(15rem, -10rem)';
  } else if (skillDetail.offsetTop + 300 < window.scrollY && skillDetail.offsetTop + 400 >= window.scrollY) {
    skillDetail.style.transform = 'scale(0.9) translate(10rem, -5rem)';
  } else if (skillDetail.offsetTop + 400 < window.scrollY) {
    skillDetail.style.transform = 'scale(1) translate(0, 0)';
  }
}