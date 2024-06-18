let language;
const languageCurrent = localStorage.getItem('language');

function getLanguage() {
  languageCurrent === null ? setLanguage('en') : false;
  language = getData('language', languageCurrent);
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  window.location.reload();
}

getLanguage();

$(document).ready(function () {
  $('[langKey]').each(function (index) {
    const strTr = language[$(this).attr('langKey')];
    $(this).html(strTr);
    $(this).attr('placeholder', strTr);
  });
});
