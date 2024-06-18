const projectData = getData('project', 'project');

const projectEl = document.getElementById('project_');

projectEl.innerHTML = '';

projectData.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add('card', 'col-12', 'col-md-4');

  divEl.innerHTML = `
  <img src=${item.image} class="card-img-top" alt=${item.name
    .toLowerCase()
    .replaceAll(' ', '-')}/>
  <div class="p-3">
    <h6 langKey=${'project_name_' + item.name}>${item.name}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="row project-card">
        <div class="col-4 d-flex align-items-center justify-content-center">
          <p class="bg-text-1">${item.time}</p>
        </div>
        <div class="col-8">
          <div class="d-flex align-items-center">
            <i class="icon-user-1"></i>
            <p>${item.teamSize}</p>
          </div>
          <div class="d-flex">
            <i class="icon-lamp"></i>
            <p>${item.position}</p>
          </div>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-4">
         <p langKey="project_descriptions">Mô tả</p>
        </div>
        <div class="col-8">
         <p langKey=${
           'project_descriptions_' + item.descriptions
         } class="whiteSpace-preLine">${item.descriptions}</p>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-4">
         <p langKey="project_mission">Nhiệm vụ</p>
        </div>
        <div class="col-8">
          <p langKey=${
            'project_missions_' + item.missions
          } class="whiteSpace-preLine">${item.missions}</p>
        </div>
      </div>
    </li>
    <li class="list-group-item">
       <div class="row">
        <div class="col-4">
         <p langKey="project_technology">Công nghệ</p>
        </div>
        <div class="col-8">
          <p langKey=${
            'project_technologys_' + item.technologys
          } class="whiteSpace-preLine">${item.technologys}</p>
        </div>
      </div>
    </li>
  </ul>
  <div class="card-body d-flex align-items-center justify-content-center">
    <a target="_blank" href=${item.link} class="card-link">Link to product</a>
  </div>
  `;

  projectEl.appendChild(divEl);
});
