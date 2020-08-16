const tile1 = document.querySelector('.one');
const tile2 = document.querySelector('.two');
const tile3 = document.querySelector('.three');
const tile4 = document.querySelector('.four');
const tile5 = document.querySelector('.five');
const tile6 = document.querySelector('.six');
const tile7 = document.querySelector('.seven');
const tile8 = document.querySelector('.eight');
const tile9 = document.querySelector('.nine');


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
let tie = true;

player1 = true;

const element = document.querySelectorAll('.grid');
element.forEach(item => {item.addEventListener('click', markTile)})

function markTile() {
  this.innerHTML = player1 ? 'X' : 'O';
  let i = this.dataset.index;
  arr[i] = player1 ? 'X' : 'O';
  this.removeEventListener('click', markTile);
  player1 === true ? player1 = false : player1 = true;
  tie = true;

  if (arr[0]  === arr[1] && arr[0] === arr[2]) {
    tile1.style.backgroundColor = 'yellow';
    tile2.style.backgroundColor = 'yellow';
    tile3.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[0]}"  Won!!!`);
    reset();}, 100)
    // alert(`"${arr[0]}"  Won!!!`);
    // reset();
  } else if (arr[3] === arr[4] && arr[3] === arr[5]) {
    tile4.style.backgroundColor = 'yellow';
    tile5.style.backgroundColor = 'yellow';
    tile6.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[3]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[6] === arr[7] && arr[6] === arr[8]) {
    tile7.style.backgroundColor = 'yellow';
    tile8.style.backgroundColor = 'yellow';
    tile9.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[6]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[0] === arr[4] && arr[0] === arr[8]) {
    tile1.style.backgroundColor = 'yellow';
    tile5.style.backgroundColor = 'yellow';
    tile9.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[0]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[2] === arr[4] && arr[2] === arr[6]) {
    tile3.style.backgroundColor = 'yellow';
    tile5.style.backgroundColor = 'yellow';
    tile7.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[2]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[0] === arr[3] && arr[0] === arr[6]) {
    tile1.style.backgroundColor = 'yellow';
    tile4.style.backgroundColor = 'yellow';
    tile7.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[0]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[2] === arr[5] && arr[2] === arr[8]) {
    tile3.style.backgroundColor = 'yellow';
    tile6.style.backgroundColor = 'yellow';
    tile9.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[2]}"  Won!!!`);
    reset();}, 100)

  } else if (arr[1] === arr[4] && arr[1] === arr[7]) {
    tile2.style.backgroundColor = 'yellow';
    tile5.style.backgroundColor = 'yellow';
    tile8.style.backgroundColor = 'yellow';
    tie = false;
    setTimeout(function() {alert(`"${arr[1]}"  Won!!!`);
    reset();}, 100)
     }

  count++;
  if(count === 9 && tie === true) {
    setTimeout(function() {alert('Tie');
    reset();}, 100)

  }
}

function reset() {
  element.forEach(item => item.innerHTML = '');
  element.forEach(item => {item.addEventListener('click', markTile);})
  element.forEach(item => item.style.backgroundColor = 'lightgray');
  arr = [0, 1 , 2, 3, 4, 5, 6, 7, 8];
  count = 0;
  player1 = true;
}
