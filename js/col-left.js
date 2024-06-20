const educationData = getData('file', 'education');
const skillData = getData('file', 'skill');
const certificateData = getData('file', 'certificate');
const awardData = getData('file', 'award');

const educationEl = document.getElementById('colLeft_education');
const skillEl = document.getElementById('colLeft_skill');
const certificateEl = document.getElementById('colLeft_certificate');
const awardEl = document.getElementById('colLeft_award');

educationEl.innerHTML = '';
skillEl.innerHTML = '';
certificateEl.innerHTML = '';
awardEl.innerHTML = '';

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

  divEl.innerHTML = `
  <p langKey=${'colLeft_skill_' + item.name}>${item.name}</p>
  <div class="skillLine">
  <div class="skillLine-1" style="width: ${item.width};"></div>
  <div class="skillLine-2" style="width: calc(100% - ${item.width});"></div>
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

awardData.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
    <h6 class="" langKey=${'colLeft_award_name_' + item.name}>${item.name}</h6>
    <p class="" langKey=${'colLeft_award_title_' + item.title}>${item.title}</p>
 `;

  awardEl.appendChild(divEl);
});
