$('.owl-carousel').owlCarousel({
    center: true,
    rtl:true,
    loop:true,
    dots:false,
    nav:true,
    navText:["<img src='./images/arrow-r.svg' />","<img src='./images/arrow-l.svg' />"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1440 : {
            items:3
        }

    }
})

$('.owl-carousel-videos').owlCarousel({
    
    rtl:true,
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
})

const items = document.querySelectorAll('.accordion-button');
const accrodionItems = document.getElementsByClassName('accordion-item');


function toggleAccordion() {
    // const accrodionItems = document.getElementsByClassName('accordion-item');
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    console.log ('tue')
    // accrodionItems.style.borderRadius = "40px";
    document.getElementsByClassName('accordion-item').style.borderRadius = "50px";
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const accordionItem = document.querySelectorAll('.faq .accordion-item');
accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {

      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].style.borderRadius = "24px";
        console.log ('set')
      
      }
     }
     else {
       accordionItemBody.style.maxHeight = 0;
       setTimeout(() => {
        for (i = 0; i < accordionItem.length; i++) {
            accordionItem[i].style.borderRadius = "100px";
            accordionItem[i].style.backgroundColor = "#"
            console.log ('ddd')
          
          };
      }, "1000")
       
     }
    
   });
});