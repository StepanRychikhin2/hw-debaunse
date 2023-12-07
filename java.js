// const slider = document.querySelector(".slider");
// const sliderItems = document.querySelectorAll(".slider__image");
// const sliderArrItems = Array.from(sliderItems);

// const btnNext = document.querySelector(".btnNext");
// const btnNextNoNext = document.querySelector(".btnPrev");



// btnNext.addEventListener("click", _.debounce(() => {
//     const curentSlide = slider.querySelector("[data-active]");
//     const curentSlideIndex = +curentSlide.dataset.index;
 
//     curentSlide.classList.add("hidden");
//     curentSlide.removeAttribute("data-active");
    
//     const nextSlideIndex = curentSlideIndex + 1 === sliderArrItems.length ? 0 : curentSlideIndex + 1;
//     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//     nextSlide.classList.remove("hidden");
//     nextSlide.setAttribute("data-active", "");

//   }, 1000))
  


//   btnNextNoNext.addEventListener("click", _.debounce(() => {
//     const curentSlide = slider.querySelector("[data-active]");
//     const curentSlideIndex = +curentSlide.dataset.index;
    
//     curentSlide.classList.add("hidden");
//     curentSlide.removeAttribute("data-active");
    
//     const nextSlideIndex = curentSlideIndex  === 0 ? sliderArrItems.length - 1 : curentSlideIndex - 1;
//     const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//     nextSlide.classList.remove("hidden");
//     nextSlide.setAttribute("data-active", "");
//   }, 1000))

// sliderArrItems.forEach(function (slide, index) {
   
//     if (index !== 0) {
//         slide.classList.add("hidden")
//     }

// slide.dataset.index = index;

// sliderArrItems[0].setAttribute("data-active", "")

// slide.addEventListener("click", function () {

// slide.classList.add("hidden")
// slide.removeAttribute("data-active")
// let nextSlideIndex = index + 1 === sliderArrItems.length ? 0 : index + 1;

// const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
// nextSlide.classList.remove("hidden")
// nextSlide.setAttribute("data-active", "")
// })
// })




  // Функція, яка виконується при переміщенні миші
  function handleMouseMove(event) {
    // Отримання координат миші
    const x = event.clientX;
    const y = event.clientY;

    // Логіка для переміщення об'єкту (тут можна вставити ваш код)
    const box = document.getElementById('box');
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

// Використання debounce для затримки виклику функції handleMouseMove
const debouncedHandleMouseMove = _.debounce(handleMouseMove, 10);

// Додавання обробників подій для слідження за рухом миші
document.addEventListener('mousemove', debouncedHandleMouseMove);








