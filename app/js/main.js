 
$(document).ready(function(){

	$('#search').change(function(){
    if($(this).prop('checked')) $('[type="search"]').trigger('focus')
	})
	$('[type="search"]').focusout(function(){
	    $('#search').prop('checked','')
	})
	/*FANCYBOX*/
	if ($("[data-fancybox]").length != 0)
		$("[data-fancybox]").fancybox({
			afterShow: function(instance, current) {},
			animationEffect : "zoom",
			animationDuration : 800,
			thumbs : {
				autoStart   : true
			},
			touch : false,
			transitionDuration : 366,
			transitionEffect: "zoom-in-out",
			beforeClose:function(){
				$("body>span.select2-container.select2-container--default.select2-container--open").remove();
			} 
		});

	/*Подключение owl carousel*/
	$('.main-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: true, // Навигация
	    dots: true, // Точки
	    dotsEach:true,

	    navText: [
	    	'<i class="icon-back"></i>',
	    	'<i class="icon-back"></i>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	$('.products-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: true, // Навигация
	    dots: true, // Точки
	    dotsEach:true,
	    
	    navText: [
	    	'<i class="icon-back"></i>',
	    	'<i class="icon-back"></i>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	$('.partners-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 0, // Отступы
	    nav: false, // Навигация
	    dots: false, // Точки
	    dotsEach:false,
	    
	    navText: [
	    	'<svg class="flickity-button-icon btn-left" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>',
	    	'<svg class="flickity-button-icon btn-right" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:2
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	$('.team-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 30, // Отступы
	    nav: true, // Навигация
	    dots: true, // Точки
	    dotsEach:true,
	    startPosition:0,
	    navText: [
	    	'<i class="icon-back"></i>',
	    	'<i class="icon-back"></i>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	$('.news-carousel').owlCarousel({
	    loop: true, // Зациклирование
	    margin: 30, // Отступы
	    nav: true, // Навигация
	    dots: false, // Точки
	    dotsEach:true,
	    startPosition:0,
	    navText: [
	    	'<i class="icon-back"></i>',
	    	'<i class="icon-back"></i>'
	    	],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	$(".js-select").select2({
    tags: false,
    allowClear: false
  });
	
 	$("[data-text-limit]").map(function( i, el ){
      el = $(el);
      var text = el.text();
      var textLimit = el.attr("data-text-limit");

      if( text.length > textLimit*1 ){
        text = text.substring(0, textLimit )
        el.text( text+ " ..." );
      }
    });
 	$(".js-select").select2({
        tags: true,
        placeholder: "Выберите...",
        allowClear: false
      });
 	// SMOTHSCROLL-LINK
    if( "smoothScroll" in window )
      smoothScroll.init({
        easing: 'easeInOutCubic',
        offset: 85
      });
 	// Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();

 //закрывание предыдущих табов 
	var tabContent = $('header .tab-content');
	tabContent.find('[data-toggle="collapse"]').on("click", function(){
		tabContent.find(".collapse").collapse("hide");
	})
//slick
$('.slick-carousel').slick({
    infinite: true,
	  vertical:!checkSm(),
	  verticalSwiping:false,
	  slidesToShow: checkSm() ? 1 : 3,
	  slidesToScroll: 1,
	  prevArrow: $('.top-arrow'),
	  nextArrow: $('.bottom-arrow'),
	  pauseOnHover: false,
	  verticalScrolling: true,
	  speed: 1000,
	  useTransform: true,
  });
	function checkSm() {
	  return $(document).width() <= 991;
	}
	//SCROLL
    var minMenu = $(".header-scroll") || null;
    var headerRange = false;
    var staffProgressStatus = false;
    $(window).on("scroll", function(e) {

      //Адаптация хедера при скролинге
      if ($(window).scrollTop() > 1 && headerRange == false) {

        headerRange = true;
        if (minMenu) minMenu.addClass("scrolled");

      } else if ($(window).scrollTop() < 1 && headerRange == true) {
        headerRange = !true;
        if (minMenu) minMenu.removeClass("scrolled");
      } //.originalEvent.wheelDelta


    });
    $(window).trigger("scroll");

$("#date").mask("hh/hh/hhhh");
$("#phone").mask("+998 (hh)hhh-hh-hh",{autoclear: false});

// Проверка на заполненность
    $(".form-control").on("keyup", function(){
      var that = $(this);
      if( that.val().length )
        that.addClass("filled")
      else
        that.removeClass("filled");
    })

    $(".select2-selection__rendered").on("click", function(){
     	window.pop = this;
     	if($("body>.select2-container").length > 1){
     		$("body>.select2-container").eq(0).remove();
     	}
      
    })

});









console.log("end script");