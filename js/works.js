async function changeData() {
  await fetch('data.json')
  .then((data) => data.json())
  .then(
    data => {
      console.log(data.works);
      const worksList = document.querySelector('.worksListWrap');
      let list = '';

      data.works.reverse().forEach(work => {
        list += `
          <li>
            <figure>
              <img src="${work.thumb}" alt="portfolio img" />
            </figure>
            <figcaption>
              <h3>${work.title}</h3>
              <p class="tech">
                ${work.tech.join('')}
              </p>
            </figcaption>
          </li>
        `
      });
      worksList.innerHTML = list;
    }
  )
}
changeData();