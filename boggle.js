function newBoggleBoard() {

  let boggleBoard = [];
  for(i=0;i<=4;i++)
  {
    boggleBoard.push(['_', '_', '_', '_'])
  }
  return boggleBoard;
}


/**
 * Prints out a boggle board.
 */

let dice = ['AAEEGN','ELRTTY','AOOTTW','ABBJOO','EHRTVW','CIMOTU','DISTTY','EIOSST','DELRVY','ACHOPS','HIMNQU','EEINSU','EEGHNW','AFFKPS','HLNNRZ','DEILRX'];

function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

function randomInteger(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  for (let row of boggleBoard)
  {
    for (i=0;i<=4;i++)
    {
      let index = dice[(randomInteger(0, dice.length - 1))];
      row[i] = index[Math.floor(Math.random() * (7))];
    }
  }
  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);
