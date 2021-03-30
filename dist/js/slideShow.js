const button = document.querySelector(".slideshow-button");
let slideNumber = 0;

const slides = [
  {
    image: "dist/img/img3.jpg",
    header: "Bedroom",
    descrption:
      "Our bedrooms have double comfortable beds wooden ceiling beautiful stone-made walls all of our rooms have  air-conditioning, clean sheets are also provided  ",
  },
  {
    image: "dist/img/img8.jpg",
    header: "Living Room",
    descrption:
      "Our beautifully decorated living rooms include a comfortable couch, sofa, and a flat-screen TV a perfect place to relax",
  },

  {
    image: "dist/img/img32.jpg",
    header: "Bathroom",
    descrption: "spacious and luxurious bathrooms clean towels are included",
  },

  {
    image: "dist/img/img11.jpg",
    header: "Outdoor Space",
    descrption:
      "Dream-like outdoor space with a jacuzzi beautiful and  palm trees ",
  },
  {
    image: "dist/img/img22.jpg",
    header: "Kitchen",
    descrption:
      "Our fully equipped kitchen includes oven, fridge, toaster, boiler, coffee machine, cutlery",
  },
];

// Slide Elements

const slideImage = document.querySelector(".slideshow-img");
const slideHeader = document.querySelector(".slideshow-header");
const slideParagraph = document.querySelector(".slideshow-paragraph");
const slideContainer = document.querySelector(".slideshow-container");

button.addEventListener("click", () => changeSlide());

const changeSlide = () => {
  slideNumber === slides.length - 1 ? (slideNumber = 0) : slideNumber++;

  slideContainer.style.display = "none";
  slideContainer.style.display = "flex";
  slideImage.src = slides[slideNumber].image;
  slideHeader.innerText = slides[slideNumber].header;
  slideParagraph.innerText = slides[slideNumber].descrption;
};
