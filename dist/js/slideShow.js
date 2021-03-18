const button = document.querySelector(".slideshow-button");
let slideNumber = 0;

const slides = [
  {
    image: "dist/img/img3.jpg",
    header: "Bedroom",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed veritatis ratione! Similique quis placeat unde libero ea assumenda porro id, tenetur corrupti, odio consectetur obcaecati ut nulla maiores.",
  },
  {
    image: "dist/img/img19.jpg",
    header: "Living Room",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed veritatis ratione! Similique quis placeat unde libero ea assumenda porro id, tenetur corrupti, odio consectetur obcaecati ut nulla maiores.",
  },

  {
    image: "dist/img/img32.jpg",
    header: "Bathroom",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed veritatis ratione! Similique quis placeat unde libero ea assumenda porro id, tenetur corrupti, odio consectetur obcaecati ut nulla maiores.",
  },

  {
    image: "dist/img/img11.jpg",
    header: "Outdoor Space",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum sed veritatis ratione! Similique quis placeat unde libero ea assumenda porro id, tenetur corrupti, odio consectetur obcaecati ut nulla maiores.",
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

console.log(slideNumber);
