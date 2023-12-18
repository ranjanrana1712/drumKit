

function playSound (e) {

  console.log("playSound called");

  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

  if(!audio) return;

  key.classList.add('playing');//This allow to use classes to animate the visual representation.
  audio.currentTime = 0;//This ensures that the audio starts from beginning each time the key is pressed
  audio.play();//This line initiates playback of the selected audio element

}
function removeTransition(e) {
  if (e.propertyName !=='transform') return;//check if the propertyName of the event 'e' is not equal to 'tranform'
  this.classList.remove('playing'); //it removes 'playing' class from element that triggered transition.
  console.log('transition called')
  
}

const keys = document.querySelectorAll('.key');//converting NodeList into an array using Array.from()
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // adds transitionend event listener to each element.
window.addEventListener('keydown', playSound);

window.addEventListener('click', playSound);