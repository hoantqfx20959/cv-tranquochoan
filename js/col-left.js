const educationData = getData('file', 'education');
const skillData = getData('file', 'skill');
const certificateData = getData('file', 'certificate');

const educationEl = document.getElementById('colLeft_education');
const skillEl = document.getElementById('colLeft_skill');
const certificateEl = document.getElementById('colLeft_certificate');

educationEl.innerHTML = '';
skillEl.innerHTML = '';
certificateEl.innerHTML = '';

educationData.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
  <h5 langKey=${'colLeft_education_' + item.name}>${item.name}</h5>
  <p>(<em>${item.time}</em>)</p>
  <p><span langKey="colLeft_education_specialization"></span>: <span langKey=${
    'colLeft_education_' + item.specialization
  }></span></p>
  `;

  educationEl.appendChild(divEl);
});

skillData.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add('d-flex');

  divEl.innerHTML = `
    <div class="col-4">
    <p langKey=${'colLeft_skill_title_' + item.title}></p>
    </div>
    <div class="col-8">
    <p>${item.list}</p>
    </div>
  `;

  skillEl.appendChild(divEl);
});

certificateData.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
    <h6 class="" langKey=${'colLeft_certificate_name_' + item.name}>${
    item.name
  }</h6>
    <p class="" langKey=${'colLeft_certificate_title_' + item.title}>${
    item.title
  }</p>
  `;

  certificateEl.appendChild(divEl);
});
