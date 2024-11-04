let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let img = document.querySelectorAll(".slider-img");
let index = 0;

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

function prevImg() {
  for (i = 0; i < img.length; i++) {
    if (img[i].classList.contains("active")) {
      index = i - 1;
      img[i].classList.remove("active");
    }
  }
  if (index < img.length && index > -1) {
    img[index].classList.add("active");
  } else {
    index = img.length - 1;
    img[index].classList.add("active");
  }
}
function nextImg() {
  for (i = 0; i < img.length; i++) {
    if (img[i].classList.contains("active")) {
      index = i + 1;
      img[i].classList.remove("active");
    }
  }
  if (index < img.length ) {
    img[index].classList.add("active");
  } else {
    index = 0;
    img[index].classList.add("active");
  }
}
