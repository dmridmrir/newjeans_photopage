const popupOverlay = document.querySelector('.popup-overlay');
const popupImage = document.querySelector('.popup-image');
const closeBtn = document.querySelector('.close-button');

popupImage.addEventListener('click', () => {
  popupOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
});
