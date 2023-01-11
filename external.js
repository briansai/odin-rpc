let num = 0;
let rounds = 5;
let winner = null;
let option = null;
let replayOptionClicked = false;

const opts = {
  rock: { text: 'scissor', sign: '✊' },
  paper: { text: 'rock', sign: '✋' },
  scissor: { text: 'paper', sign: '✌' },
};

const headContParent = document.querySelector('.header-container').parentNode;
const buttons = document.querySelector('.buttons');

const competitors = {
  1: 0,
  2: 0,
};

const getChoices = (e) => {
  if (!e) {
    return;
  }

  const getCompChoice = options[getRandomInt()];

  option = e.target.classList[1];
  num = compare(option, getCompChoice);

  animateHands();

  setTimeout(() => {
    const playerRock = option === 'rock' && 'rock';
    const compRock = getCompChoice === 'rock' && 'rock';
    const hands = document.querySelector('.hands');
    hands.remove();

    const divHandsFinal = document.createElement('div');
    divHandsFinal.className = 'hands';

    const playerChoice = document.createElement('div');
    playerChoice.className = `hand player ${playerRock}`;
    playerChoice.textContent = `${opts[option].sign}`;

    const compChoice = document.createElement('div');
    compChoice.className = `hand computer ${compRock}`;
    compChoice.textContent = `${opts[getCompChoice].sign}`;

    divHandsFinal.append(playerChoice);
    divHandsFinal.append(compChoice);

    headContParent.insertBefore(divHandsFinal, buttons);
  }, 2000);

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

const options = ['rock', 'paper', 'scissor'];

document
  .querySelectorAll('.btn')
  .forEach((btn) => btn.addEventListener('click', getChoices));

const getRandomInt = () => Math.floor(Math.random() * 3);

const compare = (player, computerChoice) => {
  const computer = computerChoice;
  console.log('computer-->', computer);
  console.log('text-->', opts[computer]);
  if (opts && opts[player].text) {
    if (opts[player].text === computer) {
      return 1;
    } else if (opts[computer].text === player) {
      return 2;
    }
  }

  return 0;
};

const generateHands = (animate) => {
  const animation = animate && 'animate rock';

  const handsInit = document.querySelector('.hands');
  handsInit.remove();

  const divHands = document.createElement('div');
  divHands.className = 'hands';

  const player = document.createElement('div');
  player.className = `hand player ${animation}`;
  player.textContent = '✊';

  const comp = document.createElement('div');
  comp.className = `hand computer ${animation}`;
  comp.textContent = '✊';

  divHands.append(player);
  divHands.append(comp);

  headContParent.insertBefore(divHands, buttons);
};

const animateHands = () => {
  generateHands(true);
};
