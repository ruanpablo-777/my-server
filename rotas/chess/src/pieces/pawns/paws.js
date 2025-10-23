function pawns(selectedpieces, element, IdOfBox, classOfPieces) {
  let x = IdOfBox.toString().split("")[0];
  let y = IdOfBox.toString().split("")[2];
  let positionOfBoxInTabuleiro = tabuleiro[x][y];
  let howManyPLaysAllowed =
    selectedpieces[selectedpieces.length - 1].allowedPlays;
  let playsToKillOponent =
    selectedpieces[selectedpieces.length - 1].playsKillOponent;

  for (let i = 0; i < howManyPLaysAllowed.length; i++) {
    //console.log(
    // howManyPLaysAllowed[i].toFixed(1).split('')[0],
    //howManyPLaysAllowed[i].toFixed(1).split('')[2]
    //IdOfBox[0],
    //positionOfBoxInTabuleiro == 0
    //);
    let x = howManyPLaysAllowed[i].toFixed(1).split("")[0];
    let y = howManyPLaysAllowed[i].toFixed(1).split("")[2];
    // console.log(!tabuleiro[x][y], tabuleiro[x][y]);
    if (tabuleiro[x][y] !== 0) {
      selectedpieces = [];
    }

    if (
      parseFloat(howManyPLaysAllowed[i]).toFixed(1) == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 0
    ) {
      //alert('he')

      movePawn(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces,
        howManyPLaysAllowed
      );
    }
  }
  //  alert('ola')

  for (let i = 0; i < playsToKillOponent.length; i++) {
    let positionToKillOponent = parseFloat(playsToKillOponent[i]).toFixed(1);
    if (
      positionToKillOponent == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 2 &&
      classOfPieces == "white"
    ) {
      alert("ola");
      killOponent(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces
      );
    } else if (
      positionToKillOponent == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 1 &&
      classOfPieces == "black"
    ) {
      killOponent(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces
      );
    }
  }
}
