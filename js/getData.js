const getData = (folder, name) => {
  let res;
  $.ajax({
    url: `/data/${folder}/${name}.json`,
    dataType: 'json',
    async: false,
    dataType: 'json',
    success: function (data) {
      res = data;
    },
  });
  return res;
};
