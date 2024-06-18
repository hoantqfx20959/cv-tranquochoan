const certificateData = getData('certificate', 'certificate');
const awardData = getData('certificate', 'award');

const certificateEl = document.getElementById('record_certificate');
const awardEl = document.getElementById('record_award');

certificateEl.innerHTML = '';

certificateData.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add(
    'card',
    'col-12',
    'col-md-6',
    'certificate',
    'bg-light',
    'border-0',
    'mt-1'
  );

  divEl.innerHTML = `
  <div class="row g-0">
   <div class="col-lg-4">
     <img src=${item.image} class="img-fluid rounded-start" alt="certificate" />
   </div>
   <div class="col-lg-8">
     <div class="card-body">
       <h6 class="card-title" langKey=${'certificate_name_' + item.name}>${
    item.name
  }</h6>
       <p class="card-text" langKey=${'certificate_title_' + item.title}>${
    item.title
  }</p>
       <p class="card-text">GPA: ${item.gpa}</p>
     </div>
   </div>
  </div>

 `;

  certificateEl.appendChild(divEl);
});

awardData.map(item => {
  const divEl = document.createElement('div');
  divEl.classList.add(
    'card',
    'col-12',
    'col-md-6',
    'certificate',
    'bg-light',
    'border-0',
    'mt-1'
  );

  divEl.innerHTML = `
  <div class="row g-0">
   <div class="col-lg-4">
     <img src=${item.image} class="img-fluid rounded-start" alt="certificate" />
   </div>
   <div class="col-lg-8">
     <div class="card-body">
      <h6 class="card-title" langKey=${'award_name_' + item.name}>${
    item.name
  }</h6>
      <p class="card-text" langKey=${'award_title_' + item.title}>${
    item.title
  }</p> 
      <p class="card-text">GPA: ${item.gpa}</p>
     </div>
   </div>
  </div>

 `;

  awardEl.appendChild(divEl);
});
