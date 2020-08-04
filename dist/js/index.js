// image showcase
showcaseImages = [
  '../dist/img/img1.jpg',
  '../dist/img/img2.jpg',
  '../dist/img/img3.jpg',
  '../dist/img/img4.jpg',
  '../dist/img/img5.jpg',
  '../dist/img/img6.jpg',
  '../dist/img/img7.jpg',
  '../dist/img/img8.jpg',
];

const image = document.querySelector('.image');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let i = 0;
image.src = showcaseImages[i];
// NEXT IMAGE
const changeImageNext = () => {
  if (i < showcaseImages.length - 1) {
    i = i + 1;
    image.src = showcaseImages[i];
  } else {
    i = 0;
    image.src = showcaseImages[i];
  }
};

// PREV IMAGE
const changeImagePrev = () => {
  if (i != 0) {
    i = i - 1;
    image.src = showcaseImages[i];
  } else {
    i = showcaseImages.length - 1;
    image.src = showcaseImages[i];
  }
};
// EventListeners
next.addEventListener('click', changeImageNext);
prev.addEventListener('click', changeImagePrev);

image.addEventListener('touchstart', changeImagePrev);
