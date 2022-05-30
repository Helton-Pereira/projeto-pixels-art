const color = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
color[0].classList.add('selected');

for (index = 0; index < color.length; index += 1) {
  if (color[index] === color[0]) {
    color[index].style.background = 'black';
  } else if (color[index] === color[1]) {
    color[index].style.background = 'yellow';
  } else if (color[index] === color[2]) {
    color[index].style.background = 'red';
  } else if (color[index] === color[3]) {
    color[index].style.background = 'blue';
  }
}

for (index0 = 0; index0 < 25; index0 += 1) {
  const boardElement = document.createElement('span');
  pixelBoard.appendChild(boardElement);
  boardElement.classList.add('pixel');
}

const pixel = document.getElementsByClassName('pixel');

function select(event1) {
  const selection = document.querySelector('.selected');
  selection.classList.remove('selected');
  event1.target.classList.add('selected');
}

color[0].addEventListener('click', select);
color[1].addEventListener('click', select);
color[2].addEventListener('click', select);
color[3].addEventListener('click', select);

function selectColor(event2) {
  if (event2.target.className === 'pixel') {
    const colorPaint = document.querySelector('.selected').style.backgroundColor;
    const mudaCor = event2.target;
    mudaCor.style.backgroundColor = colorPaint;
  }
}

function paint() {
  const pintar = document.getElementById('pixel-board');
  pintar.addEventListener('click', selectColor)
}

paint();
