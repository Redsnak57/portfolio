var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
});

typewriter
  .pauseFor(1000)
  .typeString('Développeur web')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('Full stack ')
  .pauseFor(1000)
  .start();

