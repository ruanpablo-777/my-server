function killOponent(idPeao, idBox, classOfPieces) {
  let lastPositionPieces = idPeao.currentPosition;
  let lastPositionX = lastPositionPieces.toString().split("")[0];
  let lastPositionY = lastPositionPieces.toString().split("")[2];
  //kill enemy

  getPeao = document.getElementById(`${idPeao.nome}`);
  positionBoxSelected = document.getElementById(`${idBox[0]}`);
  positionBoxSelected.lastElementChild.remove();
  positionBoxSelected.appendChild(getPeao);
  console.log(idPeao, idBox, classOfPieces);

  for (let j = 0; j < pieces.length; j++) {
    if (idPeao.nome == pieces[j].nome) {
      pieces[j].currentPosition = idBox[0];
      console.log(idPeao.nome , pieces[j].nome, classOfPieces)
      if (classOfPieces == "white") {
        console.log(idPeao.nome , pieces[j].nome)
        let x = idBox.toString().split("")[0];
        let y = idBox.toString().split("")[2];
        tabuleiro[lastPositionX][lastPositionY] = 0;
        tabuleiro[x][y] = 1;
        let updateStepsToKillOponent = pieces[j].stepsToKillEnemy.map(
          (element, index) => parseFloat(idBox[0]) - element
        );
        console.log(updateStepsToKillOponent);
        let updateStepsOfPlaysAllowed = [parseFloat(idBox[0]) - 1.0]
        
        // console.log(updateStepsToKillOponent);
        pieces[j].playsKillOponent = updateStepsToKillOponent;
        pieces[j].allowedPlays = updateStepsOfPlaysAllowed;
        console.log(updateStepsOfPlaysAllowed, updateStepsToKillOponent)
        
        clicks = 0;
      } else {
        let x = idBox.toString().split("")[0];
        let y = idBox.toString().split("")[2];
        tabuleiro[lastPositionX][lastPositionY] = 0;
        tabuleiro[x][y] = 1;
        // console.log(howManyPLaysAllowed);
        let updateStepsToKillOponent = pieces[j].stepsToKillEnemy.map(
          (element, index) => parseFloat(idBox[0]) + element
        );
        // console.log(updateStepsToKillOponent);
        pieces[j].playsKillOponent = updateStepsToKillOponent;
        let updateStepsOfPlaysAllowed = pieces[j].steps.map(
          (element, index) => parseFloat(idBox[0]) + element
        );
        // console.log(updateStepsToKillOponent);
        pieces[j].allowedPlays = updateStepsOfPlaysAllowed;
        clicks = 1;
      }
    }
    selectedpieces = [];
    //classOfPieces = [];
    console.log(clicks)
  }
}
