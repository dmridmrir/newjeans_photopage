const popupOverlay = document.querySelector('.popup-overlay');
const popupImage1 = document.querySelector('.popup-image1');
const popupImage2 = document.querySelector('.popup-image2');
const popupImage3 = document.querySelector('.popup-image3');
const popupImage4 = document.querySelector('.popup-image4');
const popupImage5 = document.querySelector('.popup-image5');
const closeBtn = document.querySelector('.close-button');

  popupImage1.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });
  popupImage2.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });
  popupImage3.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });
  popupImage4.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });
  popupImage5.addEventListener('click', () => {
    popupOverlay.classList.add('active');
  });

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});
