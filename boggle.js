function newBoggleBoard() {

  let boggleBoard = [];
  for(i=0;i<=4;i++)
  {
    boggleBoard.push(['_', '_', '_', '_'])
  }
  console.log(boggleBoard);
  return boggleBoard;
}


/**
 * Prints out a boggle board.
 */


let die1 = ["A","A","E","E","G","N"];
let die2 = ["E","L","R","T","T","Y"];
let die3 = ["A","O","O","T","T","W"];
let die4 = ["A","B","B","J","O","O"];
let die5 = ["E","H","R","T","V","W"];
let die6 = ["C","I","M","O","T","U"];
let die7 = ["D","I","S","T","T","Y"];
let die8 = ["E","I","O","S","S","T"];
let die9 = ['D','E','L','R','V','Y'];
let die10 = ['A','C','H','O','P','S'];
let die11 = ['H','I','M','N','Q','U'];
let die12 = ['E','E','I','N','S','U'];
let die13 = ['E','E','G','H','N','W'];
let die14 = ['A','F','F','K','P','S'];
let die15 = ['H','L','N','N','R','Z'];
let die16 = ['D','E','I','L','R','X'];


function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  // This is your job. :)
  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);
