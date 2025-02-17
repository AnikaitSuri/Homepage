
$(document).ready(function(){
    var mobnavbarheight = $(".mobilenavbar").outerHeight();

    $(".topmrmob").css("top", mobnavbarheight);
    console.log(mobnavbarheight);

    $("#myImage").click(function(){
        $('img',this).toggle();
    });

/* ========Associated Corporates, TPAs & Insurance Companies page load more function========== */
    jQuery('ul.level1').each(function(){
      if(jQuery(this).children('li').length>10){
        jQuery(this).children('li:lt(10)').show();
        jQuery(this).append('<button class="loadMore">Load More...</button>');
      }
    });   
    jQuery('ul.level1').on("click",'.loadMore',function (){
        jQuery(this).parent('.level1').children('li:gt(10)').show(); // use gt instead of lt
        jQuery(this).removeClass('loadMore').addClass('loadLess').text('Load Less'); 
    });
    jQuery('ul.level1').on("click",'.loadLess',function () {
        jQuery(this).parent('.level1').children('li:gt(10)').hide(); // use gt instead of lt
        jQuery(this).removeClass('loadLess').addClass('loadMore').text('Load More...'); 
    });

//============DOc nurse image change======

// $('#doctabimg').attr('src','assets/images/doctorwhite.png');

// if ($('.doccls').hasClass('active')){
//   $('#pills-doc-tab').click(function(){
//     $('#doctabimg').attr('src', 'assets/images/doctorwhite.png');
//     $('#nursetabimg').attr('src','assets/images/nursetab.png');
//   });
// }
// if ($('.nursecls').hasClass('active')){
//   $('#pills-nurse-tab').click(function(){
//     $('#doctabimg').attr('src', 'assets/images/doctortab.png');
//     $('#nursetabimg').attr('src','assets/images/nursewhite.png');
//   });
// }

// $('#pills-doc-tab').on({
//     'click': function(){
//       if ($('.doccls').hasClass('active')) {
//         $('#doctabimg').attr('src','assets/images/doctorwhite.png');
//         $('#nursetabimg').attr('src','assets/images/nursetab.png');
//       }
//     }
// });
// $('#pills-nurse-tab').on({
//   'click': function(){
//      if ($('.nursecls').hasClass('active')) {
//       $('#doctabimg').attr('src','assets/images/doctortab.png');
//       $('#nursetabimg').attr('src','assets/images/nursewhite.png');
//     }
//   }
// });

})


// ============About us swiper slider=========
const swiper = new Swiper('.awardcarousel', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  navigation: {
      nextEl: '.cust-swiper-button-next',
      prevEl: '.cust-swiper-button-prev',
  },

  });

  // =======Academics tabs======

/* ========Associated Corporates, TPAs & Insurance Companies page load more function========== */
// function readMore(successtory) {
//   let dots = document.querySelector(`.asso-cor-tps-sec-item[data-successtory="${successtory}"] .dots`);
//   let moreText = document.querySelector(`.asso-cor-tps-sec-item[data-successtory="${successtory}"] .more`); 
//   let btnText = document.querySelector(`.asso-cor-tps-sec-item[data-successtory="${successtory}"] .succesbtn`);

//   if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.textContent = "Load More";
//       moreText.style.display = "none";
//   } else {
//       dots.style.display = "none";
//       btnText.textContent = "Load Less"; 
//       moreText.style.display = "inline";
//   }
// }
