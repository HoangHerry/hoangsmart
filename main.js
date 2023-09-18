const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slideItems = document.querySelectorAll('.Slide_item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  slideItems[currentIndex].classList.remove('active'); // Ẩn item hiện tại
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  slideItems[currentIndex].classList.add('active'); // Hiển thị item mới
});

nextButton.addEventListener('click', () => {
  slideItems[currentIndex].classList.remove('active'); // Ẩn item hiện tại
  currentIndex = (currentIndex + 1) % slideItems.length;
  slideItems[currentIndex].classList.add('active'); // Hiển thị item mới
});
// Hiển thị slide ban đầu
slideItems[currentIndex].classList.add('active');



