let num = 0;
let rounds = 5;
let winner = null;
let option = null;
const competitors = {
  1: 0,
  2: 0,
};

const getPlayerChoice = (e) => {
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
  // btn disabled, but its children are still clickable
  if (winner) {
    document.querySelector('.header').textContent = `Player ${winner} wins!`;
    document.querySelectorAll('button').forEach((btn) => (btn.disabled = true));
    console.log(winner);
    return winner;
  }
};

document
  .querySelectorAll('.btn')
  .forEach(() => addEventListener('click', getPlayerChoice));

const options = ['rock', 'paper', 'scissor'];

const getRandomInt = () => Math.floor(Math.random() * 3);

const getComputerChoice = () => options[getRandomInt()];

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
