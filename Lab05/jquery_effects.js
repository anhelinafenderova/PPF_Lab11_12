$(document).ready(function () {
  $("#b1").click(function () {
    $("#kwadrat").fadeOut();
    $("#trojkat").fadeOut(500);
    $("#okrag").fadeOut(800);
  });

  $("#b2").click(function () {
    $("#kwadrat").fadeIn();
    $("#trojkat").fadeIn(500);
    $("#okrag").fadeIn(800);
  });

  $("#b3").click(function () {
    $("#kwadrat").fadeToggle();
    $("#trojkat").fadeToggle(500);
    $("#okrag").fadeToggle(800);
  });

  $("#b4").click(function () {
    $("#kwadrat").fadeTo(0, 0.6);
    $("#trojkat").fadeTo(500, 0.6);
    $("#okrag").fadeTo(800, 0.6);
  });

  $("#b5").click(function () {
    $("#panel").slideDown();
  });

  $("#b6").click(function () {
    $("#panel").slideUp();
  });

  $("#b7").click(function () {
    $("#panel").slideToggle();
  });

  $("#b8").click(function () {
    var div = $("#kwadrat2");
    div.animate({ 'border-radius': '50%', 'background-color': '#add8e6'}, "fast");
    div.animate({ 'color': 'brown', 'font-size': '40'}, "slow");
    div.animate({ 'width': '300px', 'height': '150', 'border-radius': '50%', 'background': 'red', 'overflow': 'hidden', 'font-size': '80'}, "slow");
    div.animate({ 'width': '100px', 'height': '500', 'font-size': '30'}, "slow");
    div.animate({ 'width': '400px', 'height': '200', 'border-radius': '0%', 'background-color': 'brown', 'color': '#add8e6', 'font-size': '80'}, "slow");
    div.animate({ 'width': '200', 'height': '100', 'border-radius': '50%', 'font-size': '40'}, "slow");
  });

  $("#b9").click(function () {
    $("#kwadrat3").slideToggle(5000, function () {
      alert("element jest całkowicie ukryty");
    });
  });

  $("#b10").click(function () {
    $("#kwadrat3").stop(true, true).slideDown(5000);
  });
});