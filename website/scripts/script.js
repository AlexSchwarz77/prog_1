const prevBtn = document.querySelector(".prevBtn");
const img = document.querySelectorAll(".slider-img")
console.log(img);
let index = 0;

 prevBtn.addEventListener("click",  //(e) => {
    
    prevImg
    
// }
) 


function prevImg(){
    document.querySelector('.slider-img.active').classList.remove('active');
    let i   = img[3]
    i.classList.add("active");
    img.prepend(i)
    console.log(img);
    


}