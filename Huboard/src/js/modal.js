var btnShare = document.querySelector('.customization-shareToCommunity');
var modal = document.querySelector('.customization-modalContainer');
var cancelBtn = document.querySelector('.customization-modalCancelBtn');

btnShare.addEventListener('click', function() {
  modal.style.display = 'block';
  modal.style.transition = 'ease 0.5s';
  modal.style.transitionDelay = 'ease 0.5s';
  modal.style.transitionDuration = '0.5s';
});

cancelBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});