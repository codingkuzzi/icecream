$(document).ready(function() {
  $("#formOne").submit(function(event) {
//    var items = $("#favorite1").val();
    var blanks = ["favorite1", "favorite2", "favorite3"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("ul").append($("<li>" + userInput + "</li>"));
    });

  //$("ul").append($("<li>" + blanks[0] + "</li>"));

    event.preventDefault();
  });
});
