function createPreviewPlaysPawn(
  selectedpieces,
  element,
  IdOfBox,
  classOfPieces
) {
  let preview;
  let previewToKill;
  let PreviewPlays;
  let PreviewPlaysToKill;
  let positionBoxSelected;
  let positionBoxSelectedToKill;
  let x;
  let y;
  let a;
  let b;
  let positionOfBoxInTabuleiro;
  let positionOfBoxInTabuleiroToKill;
  document.querySelectorAll(".preview-plays").forEach((element) => {
    element.remove();
  });
  document.querySelectorAll(".preview-to-kill").forEach((element) => {
    element.remove();
  });
  if (selectedpieces[selectedpieces.length - 1].currentPosition == IdOfBox) {
    console.log(selectedpieces[selectedpieces.length-1].allowedPlays)

 for (
      let i = 0;
      i < selectedpieces[selectedpieces.length - 1].playsKillOponent.length;
      i++
    ) {
      previewToKill = parseFloat(
        Math.abs(selectedpieces[selectedpieces.length - 1].playsKillOponent[i])
      ).toFixed(1);

      PreviewPlaysToKill = document.createElement("div");
      PreviewPlaysToKill.classList.toggle("preview-to-kill");
      positionBoxSelectedToKill = document.getElementById(`${previewToKill}`);

      a = previewToKill.toString().split("")[0];
      b = previewToKill.toString().split("")[2];
      positionOfBoxInTabuleiroToKill = tabuleiro[a][b];

      if (classOfPieces == "white") {
        if (positionBoxSelectedToKill && positionOfBoxInTabuleiroToKill == 2) {
          positionBoxSelectedToKill.appendChild(PreviewPlaysToKill);
        }
      } else if (classOfPieces == "black") {
        if (positionBoxSelectedToKill && positionOfBoxInTabuleiroToKill == 1) {
          positionBoxSelectedToKill.appendChild(PreviewPlaysToKill);
        }
      }
    }

    for (
      let i = 0;
      i < selectedpieces[selectedpieces.length - 1].allowedPlays.length;
      i++
    ) {
      console.log(selectedpieces[selectedpieces.length-1].allowedPlays)
      preview = parseFloat(
        Math.abs(selectedpieces[selectedpieces.length - 1].allowedPlays[i])
      ).toFixed(1);
      
      PreviewPlays = document.createElement("div");
      PreviewPlays.classList.toggle("preview-plays");
      
      positionBoxSelected = document.getElementById(`${preview}`);
      x = preview.split("")[0];
      y = preview.split("")[2];
      
      if (tabuleiro[x][y] !== 0) {
        //let a = selectedpieces[selectedpieces.length - 1].allowedPlays[0]
        //selectedpieces[selectedpieces.length - 1].allowedPlays = [a]
        selectedpieces = []
      }
      positionOfBoxInTabuleiro = tabuleiro[x][y];

      if (classOfPieces == "white") {
        if (positionBoxSelected && positionOfBoxInTabuleiro == 0) {
          positionBoxSelected.appendChild(PreviewPlays);
        }
      } else if (classOfPieces == "black") {
        if (positionBoxSelected && positionOfBoxInTabuleiro == 0) {
          positionBoxSelected.appendChild(PreviewPlays);
        }
      }
    }
   
  }
}
