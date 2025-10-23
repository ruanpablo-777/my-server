function horse(selectedpieces, IdOfBox, classOfPieces) {
  let x = IdOfBox.toString().split("")[0];
  let y = IdOfBox.toString().split("")[2];
  let positionOfBoxInTabuleiro = tabuleiro[x][y];
  let howManyPLaysAllowed = selectedpieces[selectedpieces.length - 1].allowedPlays;
  let playsToKillOponent = selectedpieces[selectedpieces.length - 1].playsKillOponent;
console.log('cavalo', selectedpieces)
  for (let i = 0; i < howManyPLaysAllowed.length; i++) {
    if (
      parseFloat(howManyPLaysAllowed[i]).toFixed(1) == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 0
    ) {
      horseMove(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces,
        howManyPLaysAllowed
      );
    }
  }

  for (let i = 0; i < playsToKillOponent.length; i++) {
    let positionToKillOponent = parseFloat(playsToKillOponent[i]).toFixed(1);
    if (
      positionToKillOponent == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 2 &&
      classOfPieces == "white"
    ) {
      horseKillOponent(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces
      );
    } else if (
      positionToKillOponent == IdOfBox[0] &&
      positionOfBoxInTabuleiro == 1 &&
      classOfPieces == "black"
    ) {
      horseKillOponent(
        selectedpieces[selectedpieces.length - 1],
        IdOfBox,
        classOfPieces
      );
    }
  }
}
