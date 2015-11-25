$(document).ready(function() {

  var downloadLink = {
    'mac': 'https://github.com/ripplefox/download/releases/download/0.2/RippleClientOsx32.rar',
    'win': 'https://github.com/ripplefox/download/releases/download/0.2/RippleClientWin32.rar',
    'pdf': 'https://github.com/ripplefox/download/files/43495/RippleJiaoCheng_1.0.pdf'
  };

  $('#download-btn').on('click', function() {
    var selected = $('input[name=optionsRadios]:checked').val();

    if (selected === 'mac') {
      document.getElementById('download-btn').action = downloadLink.mac;
    } else if (selected === 'win') {
      document.getElementById('download-btn').action = downloadLink.win;
    } else if (selected === 'pdf') {
      document.getElementById('download-btn').action = downloadLink.pdf;
    } else {
      document.getElementById('download-btn').action = downloadLink.linux64;
    }
  });
});