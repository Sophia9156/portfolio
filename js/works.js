const worksList = document.querySelector('.worksListWrap');
let list = '';

async function changeData() {
  await fetch('data.json')
  .then((data) => data.json())
  .then(
    data => {
      data.works.reverse().forEach(work => {
        makeList(work.thumb, work.title, work.type, work.tech)
      });
      worksList.innerHTML = list;

      const works = document.querySelectorAll('.worksListWrap li');

      const display = document.querySelector('.displayWrap');
      const displayThumb = document.querySelector('.displayThumb');
      const displayTitle = document.querySelector('.display h4');
      const displayPeriod = document.querySelector('.displayPeriod dd');
      const displayTech = document.querySelector('.displayTech dd');
      const displayDescription = document.querySelector('.displayDescription dd');
      const displayPage = document.querySelector('.goToPage');
      const displayGithub = document.querySelector('.goToGithub');

      // 리스트 클릭 시 디스플레이 표시
      works.forEach((work, key) => {
        work.addEventListener('click', () => {
          displayThumb.setAttribute('src', data.works[key].thumb);
          displayTitle.textContent = data.works[key].title;
          displayPeriod.textContent = data.works[key].period;
          displayTech.innerHTML = data.works[key].tech.join('');
          displayDescription.textContent = data.works[key].description;
          displayPage.setAttribute('href', data.works[key].url);
          displayGithub.setAttribute('href', data.works[key].github);
          display.style.display = 'block';
        })
      });

      // 디스플레이 닫기
      const displayClose = document.querySelector('.close');
      displayClose.addEventListener('click', () => {
        display.style.display = 'none';
      });

      // 스크롤 시 리스트 올라오기
      window.onscroll = () => {
        works.forEach(work => {
          if(work.offsetTop - window.innerHeight * 0.5 < window.scrollY){
            work.classList.add('active');
          }
        });
      }

      function makeList(thumb, title, type, tech) {
        list += `
          <li>
            <figure>
              <img src="${thumb}" alt="thumbnail" />
            </figure>
            <figcaption>
              <h3>
                ${title}
                <span class="workType">
                  ${type}
                </span>
              </h3>
              <p class="tech">
                ${tech.join('')}
              </p>
            </figcaption>
          </li>
        `;
      }

      function showList() {
        $('.worksListWrap li').css({
          opacity: '1',
          transform: 'translateY(0)'
        })
      }

      let newData = []

      // 선택 옵션
      const select = document.getElementById('select')
      select.onchange = () => {
        switch(select.value) {
          case 'all': 
          newData = [...data.works]
          list = ''
          newData.forEach(work => {
            makeList(work.thumb, work.title, work.type, work.tech)
          });
          worksList.innerHTML = list;
          showList()
          break
          case 'mini-project': 
          newData = [...data.works]
          list = ''
          newData.forEach(work => {
            if(work.type === '개인 프로젝트'){
              makeList(work.thumb, work.title, work.type, work.tech)
            }
          });
          worksList.innerHTML = list;
          showList()
          break
          case 'mini-game': 
          newData = [...data.works]
          list = ''
          newData.forEach(work => {
            if(work.type === '미니 게임'){
              makeList(work.thumb, work.title, work.type, work.tech)
            }
          });
          worksList.innerHTML = list;
          showList()
          break
          default: 
          newData = [...data.works]
          list = ''
          data.works.forEach(work => {
            makeList(work.thumb, work.title, work.type, work.tech)
          });
          worksList.innerHTML = list;
          showList()
        }
      }
    }
  )
}
changeData();