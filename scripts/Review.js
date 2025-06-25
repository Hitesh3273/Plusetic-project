const carousel = document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".wrapper button");
const firstCardWidth = carousel.querySelector(".card").offsetWidth+25;

let isDragging = false , startX , startScrollLeft;


arrowBtn.forEach(btn=>{
 
    btn.addEventListener("click" , ()=>{
                                         carousel.scrollLeft += btn.id ==="left"?-firstCardWidth:firstCardWidth
    })
});




function dragstart(e)
{
     isDragging = true;
     carousel.classList.add("draging");

    //  Record the intial cursor and scroll position of the carosel
     startX=e.pageX;
     startScrollLeft = carousel.scrollLeft;
}


function draging(e){
    // console.log(e.pageX);
    // console.log(carousel.scrollWidth);
    if(!isDragging) return;  //if draging is false return from here...
    carousel.scrollLeft = startScrollLeft-(e.pageX-startX);
}


function dragStop(e){
    isDragging = false;
    carousel.classList.remove("darging");
}


carousel.addEventListener("mousedown" , dragstart);
carousel.addEventListener("mousemove" , draging);
carousel.addEventListener("mouseup" , dragStop);








