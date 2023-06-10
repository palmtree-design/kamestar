'use strict';
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 80; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
        }
    });
  }
    $('.fadeInTopRightTrigger').on('inview', function(event, isInView) {
        if (isInView) {//表示領域に入った時1度だけアニメーションをさせる
          $(this).addClass('animate__animated animate__fadeInTopRight animate__slower');//クラス名が付与
        }
      });

      $('.jelloTrigger').on('inview', function(event, isInView) {
        if (isInView) {//表示領域に入った時1度だけアニメーションをさせる
          $(this).addClass('animate__animated animate__jello');//クラス名が付与
        }
      });
    


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

$(function(){
    $("#top_btn").on("click", function(){
      $("html, body").animate({scrollTop: 0 }, 1000, "swing");
    });
  });