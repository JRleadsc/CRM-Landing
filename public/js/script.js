$('#linkgenius').owlCarousel({
    center: true,
    rtl:true,
    loop:true,
    dots:false,
    nav:true,
    navText:["<img src='./../images/arrow-r.svg' />","<img src='./../images/arrow-l.svg' />"],
    responsive:{
        0:{
            items:1
        },
        991:{
            items:1
        },

        1000:{
            items:2
        },
        1440 : {
            items:3
        }

    }
})
$('#owl-carousel-flipster').owlCarousel({
   margin:10 ,
    center: true,
    rtl:true,
    loop:true,
    dots:false,
    nav:false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        768: {
            items:1
        },
        991:{
            items:2
        },

        1200:{
            items:3
        },
        1440 : {
            items:3
        }

    }
})

$('#owl-carousel-video').owlCarousel({
    margin:30 ,
    center: true,
    rtl:true,
    loop:true,
    dots:false,
    nav:false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        768: {
            items:2
        },
        1000:{
            items:3
        },
        1440 : {
            items:4
        }

    }
})