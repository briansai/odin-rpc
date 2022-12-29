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

  if (num) {
    competitors[num]++;
    rounds--;
    num = 0;
  }

  if (rounds === 0) {
    if (competitors[1] > competitors[2]) {
      return (winner = 1);
    }

    return (winner = 2);
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
    replayOptionYes.style.fontSize = 'x-large';
    replayOptionYes.addEventListener('click', () => {
      replayOptionClicked = true;
      window.location.reload();
    });

    let replayOptionNo = document.createElement('button');
    replayOptionNo.textContent = 'No';
    replayOptionNo.style.fontSize = 'x-large';
    replayOptionNo.addEventListener('click', () => {
      replayOptionClicked = true;
      // create something here when click is no.
    });

    document.querySelectorAll('.btn').forEach((btn) =>
      btn.removeEventListener('click', () => {
        console.log('Removed event listeners');
      })
    );

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

const options = ['rock', 'paper', 'scissors'];

document
  .querySelectorAll('.btn')
  .forEach((btn) => btn.addEventListener('click', getPlayerChoice));

const getRandomInt = () => Math.floor(Math.random() * 3);

const getComputerChoice = () => options[getRandomInt()];

const compare = (player, computer) => {
  const winner = {
    rock: 'scissor',
    paper: 'rock',
    scissor: 'paper',
  };

  if (winner[player] === computer) {
    return 1;
  } else if (winner[computer] === player) {
    return 2;
  }

  return 0;
};
