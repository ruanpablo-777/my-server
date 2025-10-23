//move pieces
function horseMove(idPeao, idBox, classOfPieces, howManyPLaysAllowed) {
  //console.log(idPeao, idBox);
  let getPeao;
  let positionBoxSelected;
  let updateStepsOfPlaysAllowed;
  let updateStepsToKillOponent;
  let lastPositionPieces = idPeao.currentPosition;
  let lastPositionX = lastPositionPieces.toString().split("")[0];
  let lastPositionY = lastPositionPieces.toString().split("")[2];

  getPeao = document.getElementById(`${idPeao.nome}`);
  positionBoxSelected = document.getElementById(`${idBox[0]}`);
  positionBoxSelected.appendChild(getPeao);

  for (let j = 0; j < pieces.length; j++) {
    if (idPeao.nome == pieces[j].nome) {
      pieces[j].currentPosition = idBox[0];
      if (classOfPieces == "white") {
        let x = idBox.toString().split("")[0];
        let y = idBox.toString().split("")[2];
        tabuleiro[lastPositionX][lastPositionY] = 0;
        tabuleiro[x][y] = 1;
        updateStepsOfPlaysAllowed = pieces[j].steps.map(
          (element, index) => parseFloat(idBox[0]) - element
        );
        updateStepsToKillOponent = pieces[j].stepsToKillEnemy.map(
          (element, index) => parseFloat(idBox[0]) - element
        );
        pieces[j].allowedPlays = updateStepsOfPlaysAllowed;
        pieces[j].playsKillOponent = updateStepsToKillOponent;
        clicks = 0;
      } else {
        let x = idBox.toString().split("")[0];
        let y = idBox.toString().split("")[2];
        tabuleiro[lastPositionX][lastPositionY] = 0;
        tabuleiro[x][y] = 2;
        updateStepsOfPlaysAllowed = pieces[j].steps.map(
          (element, index) => parseFloat(idBox[0]) + element
        );
        updateStepsToKillOponent = pieces[j].stepsToKillEnemy.map(
          (element, index) => parseFloat(idBox[0]) + element
        );
        pieces[j].allowedPlays = updateStepsOfPlaysAllowed;
        pieces[j].playsKillOponent = updateStepsToKillOponent;
        clicks = 1;
      }
    }
  }
  selectedpieces = [];
 //
  classOfPieces = [];
  console.log(tabuleiro);
  console.log('veio aqui');
}
