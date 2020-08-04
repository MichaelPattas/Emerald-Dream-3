function scroolAppear() {
  const introText = document.querySelector('.text-effect');
  const position = introText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (position < screenPosition) {
    introText.classList.add('text-appear');
  }
}

scroolAppear();
window.addEventListener('scroll', scroolAppear);

function containerAppear() {
  const introText = document.querySelector('.container-effect');
  const position = introText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (position < screenPosition) {
    introText.classList.add('container-appear');
  }
}

containerAppear();
window.addEventListener('scroll', containerAppear);
