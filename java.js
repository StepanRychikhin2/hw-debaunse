const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__image");
const sliderArrItems = Array.from(sliderItems);

const btnNext = document.querySelector(".btnNext");
const btnNextNoNext = document.querySelector(".btnPrev");
sliderArrItems.forEach(function (slide, index) {
   
    if (index !== 0) {
        slide.classList.add("hidden")
    }

slide.dataset.index = index;

sliderArrItems[0].setAttribute("data-active", "")

slide.addEventListener("click", function () {

slide.classList.add("hidden")
slide.removeAttribute("data-active")
let nextSlideIndex = index + 1 === sliderArrItems.length ? 0 : index + 1;

const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
nextSlide.classList.remove("hidden")
nextSlide.setAttribute("data-active", "")
})
})


btnNext.addEventListener("click", nextSlide)
btnNextNoNext.addEventListener("click", nexNotSlide)

function nextSlide() {
    const curentSlide = slider.querySelector("[data-active]");
const curentSlideIndex = +curentSlide.dataset.index;

curentSlide.classList.add("hidden");
curentSlide.removeAttribute("data-active");

const nextSlideIndex = curentSlideIndex + 1 === sliderArrItems.length ? 0 : curentSlideIndex + 1;
const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
nextSlide.classList.remove("hidden");
nextSlide.setAttribute("data-active", "");
}

function nexNotSlide() {
    const curentSlide = slider.querySelector("[data-active]");
    const curentSlideIndex = +curentSlide.dataset.index;
    
    curentSlide.classList.add("hidden");
    curentSlide.removeAttribute("data-active");
    
    const nextSlideIndex = curentSlideIndex  === 0 ? sliderArrItems.length - 1 : curentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
}







// textIl.addEventListener("input", _.debounce((e) => {
//   callbackCaunter ++;

//   stats.textContent = `кількісь виклику колбеку ${callbackCaunter}, ${e.target.value}`;

//   }, 2000))



