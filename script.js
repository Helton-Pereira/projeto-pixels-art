const color = document.getElementsByClassName('color');

for (index = 0; index < color.length; index += 1) {
    if (color[index].innerHTML === 'Preto') {
        color[index].style.background = 'black';
    } else if (color[index].innerHTML === 'Amarelo') {
        color[index].style.background = 'yellow'; 
    } else if (color[index].innerHTML === 'Vermelho') {
        color[index].style.background = 'red';
    } else if (color[index].innerHTML === 'Azul') {
        color[index].style.background = 'blue';
    }
}