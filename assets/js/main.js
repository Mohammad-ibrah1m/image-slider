'use strict';

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let pagination = document.querySelectorAll('.dot');
let slideItem = document.querySelectorAll('.slide-item');

let index = 0;
let count = slideItem.length - 1;

next.addEventListener('click', function () {
  showSlide(index + 1);
});

prev.addEventListener('click', function () {
  showSlide(index - 1);
});

function showSlide(id) {
  if (id > count) {
    id = 0;
  } else if (id < 0) {
    id = count;
  }
  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove('show');
    pagination[i].classList.remove('active');
  }
  slideItem[id].classList.add('show');
  pagination[id].classList.add('active');
  index = id;
}

document.onkeydown = function (e) {
  if (e.key == 'ArrowRight') {
    next.click();
  }
  if (e.key == 'ArrowLeft') {
    prev.click();
  }
};
