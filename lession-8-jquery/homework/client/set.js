// SET
$("#set-text-btn").click(function () {
  $("#text").text("khoa");
});

$("#set-html-btn").click(function () {
  $("#text").html("<h1>khoa</h1>");
});

$("#set-value-btn").click(function () {
  $("#name-input").val("khoa");
});

$("#set-attribute-btn").click(function () {
  $("#text").attr("style", "background-color:blue; padding:5px");
});