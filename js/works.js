const worksList = document.querySelector('.worksListWrap');
let list = '';

async function changeData() {
  await fetch('data.json')
  .then((data) => data.json())
  .then(
    data => {
      let newData = [...data.works.reverse()]
      makeList();

      // 선택 옵션
      const select = document.getElementById('select')
      select.onchange = () => {
        switch(select.value) {
          case 'all': 
          newData = [...data.works]
          makeList();
          showList()
          break
          case 'mini-project': 
          newData = data.works.filter(data => data.type === '개인 프로젝트')
          makeList();
          showList()
          break
          case 'mini-game': 
          newData = data.works.filter(data => data.type === '미니 게임')
          makeList();
          showList()
          break
          default: 
          newData = [...data.works]
          makeList();
          showList()
        }
      }

      const works = document.querySelectorAll('.worksListWrap li');

      const display = document.querySelector('.displayWrap');
      const displayThumb = document.querySelector('.displayThumb');
      const displayTitle = document.querySelector('.display h4');
      const displayTech = document.querySelector('.displayTech dd');
      const displayDescription = document.querySelector('.displayDescription dd');
      const displayPage = document.querySelector('.goToPage');
      const displayGithub = document.querySelector('.goToGithub');

      // 리스트 클릭 시 디스플레이 표시
      $('.worksListWrap').on('click', 'li', (e) => {
        newData.forEach((data) => {
          if(data.id === e.currentTarget.dataset.num) {
            displayThumb.setAttribute('src', data.thumb);
            displayTitle.textContent = data.title;
            displayTech.innerHTML = data.tech.join('');
            displayDescription.textContent = data.description;
            displayPage.setAttribute('href', data.url);
            displayGithub.setAttribute('href', data.github);
          }
        })
        display.style.display = 'block';
      })

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

      function makeList() {
        list = ''
        newData.map(data => {
          list += `
            <li data-num="${data.id}">
              <figure>
                <img src="${data.thumb}" alt="thumbnail" />
              </figure>
              <figcaption>
                <h3>
                  ${data.title}
                  <span class="workType">
                    ${data.type}
                  </span>
                </h3>
                <p class="tech">
                  ${data.tech.join('')}
                </p>
              </figcaption>
            </li>
          `;
        })
        worksList.innerHTML = list;
      }

      function showList() {
        $('.worksListWrap li').css({
          opacity: '1',
          transform: 'translateY(0)'
        })
      }
    }
  )
}
changeData();