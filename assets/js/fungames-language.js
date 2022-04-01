$(".EN").hide();
$(".ID").show()
$( "#ID" ).addClass("active");
$( "#EN" ).removeClass("active");

$( "#ID" ).click(function() {
  $(".EN").hide();
  $(".ID").show();
  $( "#ID" ).addClass("active");
  $( "#EN" ).removeClass("active");
});
$( "#EN" ).click(function() {
  $(".ID").hide();
  $(".EN").show();
  $( "#EN" ).addClass("active");
  $( "#ID" ).removeClass("active");
});