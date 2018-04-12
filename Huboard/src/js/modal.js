var btnShare = document.querySelector('.customization-shareToCommunity');
var modal = document.querySelector('.customization-modalContainer');
var cancelBtn = document.querySelector('.customization-modalCancelBtn');

btnShare.addEventListener('click', function() {
  modal.style.display = 'block';
});

cancelBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});