//Side panel
var panelBtn = document.querySelector('.panelContainer-panelBtn');
var panelContainer = document.querySelector('.panelContainer');

panelBtn.addEventListener('click', function(){
  panelContainer.classList.toggle("--isClosed");
});

//Modal
var btnShare = document.querySelector('.panelContainer-shareBtn');
var modal = document.querySelector('.modalContainer');
var cancelBtn = document.querySelector('.modalContainer-modalCancelBtn');

btnShare.addEventListener('click', function() {
  modal.style.display = 'block';
  modal.style.transition = 'ease 0.5s';
  modal.style.transitionDelay = 'ease 0.5s';
  modal.style.transitionDuration = '0.5s';
});

cancelBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});