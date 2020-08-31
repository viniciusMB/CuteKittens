const kittensFade = document.querySelector('./cutekittens/kittensFade');
const kittensImages = document.querySelectorAll('./cutekittens/kittensFade img');

let counter = 1;
const size = kittensImages[0].clientWidth;

kittensImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
