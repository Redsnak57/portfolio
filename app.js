var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 150,
});

typewriter
  .pauseFor(1000)
  .typeString('Développeur web')
  .pauseFor(1500)
  .deleteChars(3)
  .typeString('Full stack ')
  .start();