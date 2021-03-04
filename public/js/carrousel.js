const carouselImage = document.querySelector('.caroussel__images')
const carouselButtons = document.querySelectorAll(".caroussel__button")
const numberOfImages = document.querySelectorAll(".caroussel__images img").length;

let imageIndex=1;
let tranlateX=0;

carouselButtons.forEach(button =>{
    button.addEventListener('click', (event) =>{
        if(event.target.id === "previous"){
            if(imageIndex !== 1){
                imageIndex --;
                tranlateX +=55;
            }
        }else{
            if (imageIndex !== numberOfImages){
                imageIndex++;
                tranlateX -= 55;
            }
        }
        carouselImage.style.transform = `translateX(${tranlateX}rem)`
    })
})