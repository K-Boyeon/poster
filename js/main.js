$(function(){
    $(window).resize(function(){ //이벤트 헨들링의 첫 시작이 setTimeout -> 이벤트 헨들링을 조종해주는 역할
		h = $(window).height();
		$("#page").css({height:h});//css속성을 줌으로써 자동적으로 px단위를 인식함
	});
	$(window).trigger("resize"); //강제로 실행(trigger)

    setTimeout(function(){
        $("html, body").animate({scrollTop : 0}, 600, function(){
            $(".title").addClass("on");

            $(window).scroll(function(){
                const t = $(this).scrollTop();
                console.log(t);
                
                if(t <= $("#page2").offset().top){
                    $(".image").addClass("active");
                    $(".has-ani").addClass("animate-in");
                }
            });
        });
    }, 150);
});

