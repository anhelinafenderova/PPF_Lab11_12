$(document).ready(function () {
  $("#button01").click(function () {
    $("p").hide(500);
  });

  $("#button02").click(function () {
    $("#p_03").hide();
  });

  $("#button03").click(function () {
    $(".cp_01").hide();
  })

  $("#a0").click(function () {
    $("#lista li:first-child").css({
      'font-size': 50,
      'background': '-webkit-linear-gradient(90deg, #9542f5, #f54242)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    });
  })

  $("#a1").click(function () {
    $("#lista li:even").hide(1000);
    $(":button").toggleClass("big_button");
  })

  $("#a2").click(function () {
    $("#lista li:odd").css('background-color', 'pink')
  })

  $("#a3").click(function () {
    $("#lista li:last-child").hide(300);
  })

  $("#button04").click(function () {
    $("p").show(300);
  })

  $("#button05").click(function () {
    if ($(".list").is(":hidden")) {
      $(".list").show(300);
    } else {
      $(".list").hide(300);
    }
  })
});

