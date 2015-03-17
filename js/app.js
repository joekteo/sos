'use strict';

(function() {
  $(function() {
    $("#editButton").click(function() {
      $("#boxTwo").show('slow');
      event.preventDefault();
    });
  });

  $(function() {
    $('#boxTwo').submit(function() {
      var inputText = $('form input[name="post"]').val();
      event.preventDefault();
      // able to add multiple words with line 16
      // $('#boxOne').prepend('<p>' + inputText + '</p>');
      $('#boxOne').replaceWith('<p class="replacedText">' + 'Name: ' + inputText + '</p>');
    });
  });
})();
