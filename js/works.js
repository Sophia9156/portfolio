const worksList = document.querySelector('.worksListWrap');
let list = '';

async function changeData() {
  await fetch('data.json')
  .then((data) => data.json())
  .then(
    data => {
      data.works.reverse().forEach(work => {
        list += `
          <li>
            <figure>
              <img src="${work.thumb}" alt="thumbnail" />
            </figure>
            <figcaption>
              <h3>
                ${work.title}
                <span class="workType">
                  ${work.type}
                </span>
              </h3>
              <p class="tech">
                ${work.tech.join('')}
              </p>
            </figcaption>
          </li>
        `;
      });
      worksList.innerHTML = list;      

      const work = document.querySelectorAll('.worksListWrap li');
      const display = document.querySelector('.displayWrap');
      const displayThumb = document.querySelector('.displayThumb');
      const displayTitle = document.querySelector('.display h4');
      const displayPeriod = document.querySelector('.displayPeriod dd');
      const displayTech = document.querySelector('.displayTech dd');
      const displayDescription = document.querySelector('.displayDescription dd');
      const displayLink = document.querySelector('.displayLink a');
      work.forEach((work, key) => {
        work.addEventListener('click', () => {
          displayThumb.setAttribute('src', data.works[key].thumb);
          displayTitle.textContent = data.works[key].title;
          displayPeriod.textContent = data.works[key].period;
          displayTech.innerHTML = data.works[key].tech.join('');
          displayDescription.textContent = data.works[key].description;
          displayLink.setAttribute('href', data.works[key].url);
          display.style.display = 'block';
        })
      });
      const displayClose = document.querySelector('.close');
      displayClose.addEventListener('click', () => {
        display.style.display = 'none';
      });
    }
  )
}
changeData();