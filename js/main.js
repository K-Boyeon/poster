$(function () {
  var h = 0;
  var t = 0;

  setTimeout(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700, function () {
      $("#page1 .title").addClass("on");
    });
  }, 150);

  $(window).resize(function () { //이벤트 헨들링의 첫 시작이 setTimeout -> 이벤트 헨들링을 조종해주는 역할
    h = $(window).height();
    $("#page").css({
      height: h
    }); //css속성을 줌으로써 자동적으로 px단위를 인식함
  });
  $(window).trigger("resize"); //강제로 실행(trigger)

  $(window).scroll(function () {
    t = $(this).scrollTop();
    console.log(t);

    if (t <= $("#page2").offset().top) {
      $("#page2 .image").addClass("active");
      $("#page2 .text").addClass("active");
      $("#page2").addClass("show");
    }
  });

  const thisYear = document.querySelector(".this-year");
  thisYear.textContent = new Date().getFullYear();
});
