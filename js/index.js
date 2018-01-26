{
    $("#menu li").on("click",function () {
    $("#menu li").removeClass("active");
        $(this).addClass("active");
        console.log($(this));
    })

}
{
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
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
