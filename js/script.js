window.addEventListener('DOMContentLoaded', () => {
  const btnYes = document.querySelector('#btnYes'),
    btnNo = document.querySelector('#btnNo'),
    title = document.querySelector('.title'),
    gif = document.querySelector('.gif');

  function positionRandom() {
    const x = randomInteger(50, 300);
    const y = randomInteger(50, 300);

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  btnNo.addEventListener('mousemove', positionRandom);

  btnNo.addEventListener('click', () => {
    setTimeout(() => {
      title.innerHTML = 'Error 404';
    }, 2000);
  });

  btnYes.addEventListener('click', () => {
    title.innerHTML = 'Урааа, спасибо!';
    gif.src = "img/2.gif";
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';

    setTimeout(() => {
      title.innerHTML = 'Ты будешь моей валентинкой?';
      gif.src = "img/1.gif";
      btnYes.style.display = 'block';
      btnNo.style.display = 'block';
      btnNo.style.left = `auto`;
      btnNo.style.top = `80%`;
    }, 5000);
  });
})