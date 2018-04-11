import 'flexboxgrid';
import './styles/styles.scss';

var panelImg = document.querySelector('.customization-panelImg');
var panel = document.querySelector('.customization-panel');
var panelImgReverse = document.querySelector('.customization-panelImgReverse')

panelImg.addEventListener('click', function() {
  panel.style.left = "78%";
  panel.style.transition = "all ease auto 0.3s";
  panel.style.transitionDelay = "all ease auto 0.3s";
  panel.style.transitionDuration = "0.3s";
  panelImg.style.display = 'none';
});

panelImgReverse.addEventListener('click', function() {
  panel.style.left = "120%";
  panelImg.style.display = 'block';
})
