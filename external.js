const runGame = () => {
  let num = 0;
  let rounds = 5;
  let winner = null;
  const competitors = {
    1: 0,
    2: 0,
  };

  const getPlayerChoice = (e) => {
    const option = e.target.textContent.toLowerCase();
    num = compare(option, getComputerChoice());
    console.log(num);
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
      document.querySelector('.header').textContent = `Player ${winner} wins!`;
      document
        .querySelectorAll('button')
        .forEach((btn) => (btn.disabled = true));
      return winner;
    }
  };

  document
    .querySelectorAll('button')
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

    if (winner[player] === computer) {
      return 1;
    } else if (winner[computer] === player) {
      return 2;
    }

    return 0;
  };
};

runGame();
