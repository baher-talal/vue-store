//to back 
$(document).on('click', '.cheveron_back', function () {
  'use strict';
  parent.history.back();
});
/* End Header Navbar */


$(function () {
  var url = window.location.pathname;
  urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
  $('footer .foot_link').each(function () {
    if (url.includes($(this).attr('href'))) {
      $(this).addClass('active_foot');
    }
  });
});

var openFile = function (event) {
  var input = event.target;
  console.log('good');
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var output = document.getElementById('output');
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

function _upload() {
  document.getElementById('file_upload_id').click();
}