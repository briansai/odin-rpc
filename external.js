let num = 0;
let rounds = 5;
let winner = null;
let option = null;
let replayOptionClicked = false;
const competitors = {
  1: 0,
  2: 0,
};

const getPlayerChoice = (e) => {
  if (!e) {
    return;
  }

  option = e.target.classList[1];
  num = compare(option, getComputerChoice());
  console.log(e);
  if (num) {
    competitors[num]++;
    rounds--;
    num = 0;
  }

  if (rounds === 0) {
    if (competitors[1] > competitors[2]) {
      winner = 1;
    }

    winner = 2;
  }

  if (winner) {
    let headerContainer = document.querySelector('.header-container');
    let buttons = document.querySelector('.buttons');

    let replayContainer = document.createElement('div');
    replayContainer.className = 'replay-container';

    let header = document.querySelector('.header');
    header.textContent = `Player ${winner} wins!`;

    let replay = document.createElement('h2');
    replay.textContent = 'Do you want to play again?';

    let replayOptionYes = document.createElement('button');
    replayOptionYes.textContent = 'Yes';
    replayOptionYes.addEventListener('click', () => {
      replayOptionClicked = true;
      window.location.reload();
    });

    let replayOptionNo = document.createElement('button');
    replayOptionNo.textContent = 'No';
    replayOptionNo.addEventListener('click', () => {
      replayOptionClicked = true;
      // create something here when click is no.
    });

    if (!replayOptionClicked) {
      replayContainer.append(replay);
      replayContainer.append(replayOptionYes);
      replayContainer.append(replayOptionNo);
      headerContainer.append(replayContainer);
    }

    buttons && buttons.remove();

    return winner;
  }
};
const options = [
  { text: 'rock', sign: '✊' },
  { text: 'paper', sign: '✋' },
  { text: 'scissor', sign: '✌' },
];

document
  .querySelectorAll('.btn')
  .forEach(() => addEventListener('click', getPlayerChoice));

const getRandomInt = () => Math.floor(Math.random() * 3);

const getComputerChoice = () => options[getRandomInt()].text;

const compare = (player, computer) => {
  const winner = {
    rock: 'scissor',
    paper: 'rock',
    scissor: 'paper',
  };
  console.log('player-->', player);
  console.log('computer---->', computer);
  if (winner[player] === computer) {
    return 1;
  } else if (winner[computer] === player) {
    return 2;
  }

  return 0;
};
