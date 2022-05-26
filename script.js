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
  const boardElement = document.createElement('div');
  pixelBoard.appendChild(boardElement);
  boardElement.classList.add('pixel');
}


