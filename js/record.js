const recordExperience = getData('record', 'experience');
const recordEducation = getData('record', 'education');
const recordActivities = getData('record', 'activities');
const recordInterest = getData('record', 'interest');
const recordLanguage = getData('record', 'language');
const recordSkill = getData('record', 'skill');

const experienceEl = document.getElementById('record_experience');
const educationEl = document.getElementById('record_education');
const activitiesEl = document.getElementById('record_activities');
const interestEl = document.getElementById('record_interest');
const languageEl = document.getElementById('record_language');
const skillEl = document.getElementById('record_skill');

experienceEl.innerHTML = '';
educationEl.innerHTML = '';
activitiesEl.innerHTML = '';
interestEl.innerHTML = '';
languageEl.innerHTML = '';
skillEl.innerHTML = '';

recordExperience.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('list-group-item');

  liEl.innerHTML = `
    <h5 langKey=${'record_experience_' + item.name + '_name'}>${item.name}</h5>
    <p>
      (<em>${item.time}</em>)
    </p>
    <div>
     <p langKey=${
       'record_experience_' + item.workContent + '_desc'
     } class="whiteSpace-preLine">${item.workContent}</p>
    </div>
  `;

  experienceEl.appendChild(liEl);
});

recordEducation.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('list-group-item');

  liEl.innerHTML = `
  <h5 langKey=${'record_education_' + item.name}>${item.name}</h5>
  <p>
    (<em>${item.time}</em>)
  </p>
  <p><span langKey="record_education_specialization">Chuyên ngành</span>: <span langKey=${
    'record_education_' + item.specialization
  }></span></p>
  <p>GPA: ${item.gpa}</p>
  `;

  educationEl.appendChild(liEl);
});

recordActivities.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('list-group-item');

  liEl.innerHTML = `
  <h5 langKey=${'record_education_' + item.name}>${item.name}</h5>
  <p><em>${item.time}</em></p>
  <p langKey=${'record_education_' + item.award}>${item.award}</p>
  <p langKey=${'record_education_' + item.topic}>${item.topic}</p>
  `;

  activitiesEl.appendChild(liEl);
});

recordInterest.map(item => {
  const divEl = document.createElement('div');

  divEl.innerHTML = `
  <i class="${item.icon} h4"></i>
  <p langKey=${'record_interest_' + item.name}>${item.name}</p>
  `;

  interestEl.appendChild(divEl);
});

recordLanguage.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add('ps-3', 'pb-3');

  divEl.innerHTML = `
  <p langKey=${'record_language_' + item.name}>${item.name}</p>
  ${item.skill
    .map(skill => {
      const spanEl = document.createElement('span');
      return (spanEl.innerHTML = `<span class=${skill}></span>`);
    })
    .toString()
    .replaceAll(',', '')}
  `;

  languageEl.appendChild(divEl);
});

recordSkill.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add('ps-3', 'pb-3');

  divEl.innerHTML = `
  <p langKey=${'record_skill_' + item.name}>${item.name}</p>
  ${item.skill
    .map(skill => {
      const spanEl = document.createElement('span');
      return (spanEl.innerHTML = `<span class=${skill}></span>`);
    })
    .toString()
    .replaceAll(',', '')}
  `;

  skillEl.appendChild(divEl);
});
