const carouselImage = document.querySelector('.caroussel__images')
const carouselButtons = document.querySelectorAll(".caroussel__button")
const numberOfImages = document.querySelectorAll(".caroussel__images img").length;
const pictureOnly = document.querySelector('.caroussel__images img')

console.log(pictureOnly);
let imageIndex=1;
let tranlateX=0;

carouselButtons.forEach(button =>{
    button.addEventListener('click', (event) =>{
        if(event.target.id === "previous"){
            if(imageIndex !== 1){
                imageIndex --;
                tranlateX += pictureOnly.offsetWidth;
                console.log(pictureOnly.offsetWidth);
            }
        }else{
            if (imageIndex !== numberOfImages){
                imageIndex++;
                tranlateX -= pictureOnly.offsetWidth;
                console.log(pictureOnly.offsetWidth);
            }
        }
        carouselImage.style.transform = `translateX(${tranlateX}px)`
    })
})