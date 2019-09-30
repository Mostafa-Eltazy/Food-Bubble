const slideIndex = 1;
showDivs(slideIndex);

const plusDivs = n => {
  showDivs((slideIndex += n));
};

const showDivs = n => {
  var i;
  var x = document.getElementsByClassName('restaurant-gallery');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
};
