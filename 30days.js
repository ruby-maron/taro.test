$(function () {
    // swiper使用宣言（スライド）============
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 40,
        initialSlide: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
    });

    // ページ内移動スクロール============
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });


    // faq用アコーディオンメニュー============
    $(".fq-wrap").click(function () {
        $(this).find(".answer").slideToggle();
        $(this).toggleClass("open");
    });
    $(".fq-wrap").eq(0).click(); // ★← 定義済みの上のクリックイベントの内容で、あらかじめクリック（開いてる）した状態に。


    // TOPから100px以上スクロールした場合、TOPへ戻るボタンが出現============
    $(".floating").css("display", "none");
    jQuery(window).on("scroll", function ($) {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.floating').show(200);
        } else {
            jQuery('.floating').hide(200);
        }
    });
    jQuery('.floating').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, "fast");
        return false;
    });


    // ドロワーメニューの利用宣言 ============
    $(document).ready(function () {
        $('.drawer').drawer();
    });

    // テーブルのtdにenglishつけるだけ
    $("tr td").addClass("english");


});










