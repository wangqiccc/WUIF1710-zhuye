{
    var btns=$("#menu a");
    var index=$(this).index();
    btns.click(function () {
    $("#menu a").removeClass("active");
        $(this).addClass("active")
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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}