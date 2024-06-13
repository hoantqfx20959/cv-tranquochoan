const getData = (folder, name) => {
  let res;
  $.ajax({
    url: `https://hoantqfx20959.github.io/cv-tranquochoan/js
/data/${folder}/${name}.json`,
    dataType: 'json',
    async: false,
    dataType: 'json',
    success: function (data) {
      res = data;
    },
  });
  return res;
};
