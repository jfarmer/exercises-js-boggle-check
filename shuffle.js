function shake(){
  let abcs = 'abcdefghijklmnopqrstuvwxyz'
  let letterChoice = '';
  for(let i = 0; i < 16; i++){
    let randomLetter = abcs.charAt(Math.floor(Math.random() * abcs.length));
    console.log(randomLetter);
    letterChoice = letterChoice + randomLetter;
  }
  console.log(letterChoice);
  return letterChoice;
}

console.log(shake())
