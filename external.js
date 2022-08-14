const options = ['rock', 'paper', 'scissors'];

const getRandomInt = () => Math.floor(Math.random() * 3);

const getComputerChoice = () => options[getRandomInt()];

const compare = (player, computer) => {
  const winner = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (winner[player] === computer) {
    return 1;
  } else if (winner[computer] === player) {
    return 2;
  }

  return 0;
};

const playRound = () => {
  let num = 0;
  let rounds = 5;
  const competitors = {
    1: 0,
    2: 0,
  };

  while (rounds || (!num && rounds)) {
    num = compare(prompt('Enter your choice'), getComputerChoice());

    if (num) {
      competitors[num]++;
      rounds--;
      num = 0;
    }
  }

  if (competitors[1] > competitors[2]) {
    console.log('Player 1 wins!');
    return 'Player 1 wins!';
  }

  console.log('Computer wins!');
  return 'Computer wins!';
};

playRound();
