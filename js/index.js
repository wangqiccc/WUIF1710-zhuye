{
    var btns=$("#menu a");
    var index=$(this).index()
    var n=0;
    btns.click(function () {
        n=index;
    $("#menu a").removeClass("active");
        $(this).addClass("active")
    })

}
{
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        parallax: true,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
{
    $(".next").click(function () {
        $(".scene ul").transition({rotateY:"-=60"});
    });
    $(".prev").click(function () {
        $(".scene ul").transition({rotateY:"+=60"});
    });
}
{
    $("#container").fullpage({
    afterLoad:function (anchor, index) {
        if (index === 3) {
            $(".scene ul")
                .css("transform", "scale(1)")
            $(".xiamu")
                .css("transform","translateY(0)")
        }
    }
})
}