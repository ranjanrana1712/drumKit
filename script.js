function removeTransition(e) {
  if (e.propertyName != 'transform') return;//check if the propertyName of the event 'e' is not equal to 'tranform'
  e.target.classList.remove('playing'); //it removes 'playing' class from element that triggered transition.
}

function playSound (e) {

  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);

  if(!audio) return;

  key.classList.add('playing');//This allow to use classes to animate the visual representation.
  audio.currentTime = 1;//This ensures that the audio starts from beginning each time the key is pressed
  audio.play();//This line initiates playback of the selected audio element

}

const keys = Array.from(document.querySelectorAll('.key'));//converting NodeList into an array using Array.from()
keys.forEach(keys => keys.addEventListener('transitioned', removeTransition)); // adds transitionend event listener to each element.
  // window.addEventListener('keydown', playSound);
window.addEventListener('keydown', playSound);