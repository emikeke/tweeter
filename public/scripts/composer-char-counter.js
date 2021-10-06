$(document).ready(function() {
  $('#tweet-text').keyup(() => {
    if($('#tweet-text').val().length > 140) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#545149');
    }
    console.log('ur cute');
  });
});