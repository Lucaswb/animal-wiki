//
$(document).ready(function(event) {
  $("form#animalbios").submit(function(event) {
    var animals = $("#animals").val();


    if (animals === "Koala"){
      $('#animal1').show();
      $("#animal2, #animal3").hide();
    }
    else if(animals === "Turtle"){
      $('#animal2').show();
      $("#animal1, animal3").hide();
    }
    else {
      $('#animal3').show();
      $("#animal1, #animal2").hide();
    }
    event.preventDefault();
});
});
