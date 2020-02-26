 $(function() {

    var header = $('#header'),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
       
        /*Fixed header */
        checkScroll(scrollOffset);

        $(window).on("scroll", function() {
            scrollOffset = $(this).scrollTop();

            checkScroll(scrollOffset);
        });

        function checkScroll(scrollOffset) {
            if(scrollOffset >= introH) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        };
   
        /*Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
            event.preventDefault();

            var $this = $(this);
            var blockId = $this.data("scroll");
            var blockOffset = $(blockId).offset().top;
            
            $("#nav a").removeClass("active");
            $this.addClass("active");
            
            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    });
    /* Menu nav toggle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    /*Accordion */
    const setAvatar = (avatarId) => {
      let pics = document.querySelectorAll(".wedo__avatar");
      for (let pic of pics) {
        pic.classList.remove("wedo__img");
        if (`#${pic.id}` === avatarId) pic.classList.toggle("wedo__img");
        
      }
    };

    const collapseAll = (blockId) => {
      let elems = $("[data-collapse]");
      for (let elem of elems) {
        if(elem.dataset.collapse !== blockId) {
        elem.classList.remove("active");
        }
      }
    }

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        var $this = $(this),
        blockId = $this.data('collapse');
        collapseAll(blockId);
        $this.toggleClass("active");     
        setAvatar(blockId);
    });

});

/* Slider */

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToshow: 1,
    slidesToScroll: 1
});
/* Logos */
$('#logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  /*Intro slider*/

let sliderItems = document.querySelectorAll('.slider__item');

const clearClasses = () => {
  for (let i of sliderItems) {
    i.classList.remove('active');
  }
}
const clearSuptitleClasses = () => {
  const suptitles = document.querySelectorAll('.intro__suptitle');
  for (let i of suptitles) {
    i.classList.remove('active');
  }
}
let slideBtn = document.getElementById("myBtn");

sliderItems.forEach((item) => {
  item.onclick = (e) => {
    clearClasses();
    item.classList.add('active');
    const intro = document.querySelector('.intro__slide__one');
    const introSuptitle = document.getElementById(item.dataset.title);
    clearSuptitleClasses();
    introSuptitle.classList.add('active');
    intro.style.background = `url(${item.dataset.path})`;
  }
  slideBtn.onclick = function() {
    let activeSlide = document.querySelector('.slider__item.active');  
    const modale = document.getElementById(activeSlide.dataset.modal);
    modale.style.display = "block";
    }  
});
//============================================================================//
    

/* MODAL */ 
let modals = document.querySelectorAll(".slider__modal");  
   
  modals.forEach((item, index) => {
    let span = document.getElementsByClassName("modal__close")[index];
    span.onclick = () => {
    item.style.display = "none";
    };  

    item.onclick = (e) => {
     if (e.target.className == 'slider__modal') {
      item.style.display = "none";
     }
    }    
  
  });

 
  