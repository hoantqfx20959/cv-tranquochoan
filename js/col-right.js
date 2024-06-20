const experienceData = getData('file', 'experience');
const projectData = getData('file', 'project');

const experienceEl = document.getElementById('colRight_experience');
const projectEl = document.getElementById('colRight_project');

experienceEl.innerHTML = '';
projectEl.innerHTML = '';

experienceData.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
    <h5 langKey=${'colRight_experience_name_' + item.name}>${item.name}</h5>
    <p>(<em>${item.time}</em>)</p>
    <div>
     <p langKey=${'colRight_experience_desc_' + item.workContent}>
     ${item.workContent}</p>
    </div>
  `;

  experienceEl.appendChild(divEl);
});

projectData.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
    <div class="d-flex">
      <div class="col-8">
        <a target="_blank" href=${item.link}>
          <span langKey=${'colRight_project_name_' + item.name}>
          ${item.name}</span>
        </a>
        <p class="bg-text-1">(<em>${item.time}</em>)</p>
      </div>
      <div class="col-4">
        <div class="d-flex">
          <i class="icon-users"></i>
          <p>${item.teamSize}</p>
        </div>
        <div class="d-flex">
          <i class="icon-lamp"></i>
          <p>${item.position}</p>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-3">
      <p langKey="colRight_project_descriptions"></p>
      </div>
      <div class="col-9">
      <p langKey=${'colRight_project_descriptions_' + item.descriptions}>${
    item.descriptions
  }</p>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-3">
      <p langKey="colRight_project_technology"></p>
      </div>
      <div class="col-9">
        <p langKey=${'colRight_project_technologys_' + item.technologys}>${
    item.technologys
  }</p>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-3">
      <p langKey="colRight_project_view"></p>
      </div>
      <div class="col-9">
        <p>${item.source}</p>
      </div>
    </div>
  `;

  projectEl.appendChild(divEl);
});
