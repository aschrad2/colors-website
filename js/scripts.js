$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickme").click(function() {
    $("#elephant-showing").fadeIn();
    $("#elephant-hidden").toggle();
  });
});