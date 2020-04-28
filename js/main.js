$(document).ready(function() {

  var downloadLink = {
    'mac': 'https://github.com/ripplefox/ripplewallet/releases/download/v2.0.0/FoxletRipple-2.0.0-mac-x64.zip',
    'win': 'https://github.com/ripplefox/ripplewallet/releases/download/v2.0.0/FoxletRipple-2.0.0-win-x86.zip',
    'pan': 'https://pan.baidu.com/s/1sosDPDtwbMDhwHdz-1Dh7w'
  };

  $('#download-btn').on('click', function() {
    var selected = $('input[name=optionsRadios]:checked').val();

    if (selected === 'mac') {
      document.getElementById('download-btn').action = downloadLink.mac;
    } else if (selected === 'win') {
      document.getElementById('download-btn').action = downloadLink.win;
    } else if (selected === 'pan') {
      document.getElementById('download-btn').action = downloadLink.pan;
    } else {
      document.getElementById('download-btn').action = downloadLink.linux64;
    }
  });
});
