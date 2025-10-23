let controll = true;
let controllToKill = true;

function createPreviewPlays(selectedpieces, element, IdOfBox, classOfPieces) {
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
    // console.log(element);
  });
  document.querySelectorAll(".preview-to-kill").forEach((element) => {
    element.remove();
  });
  if (selectedpieces[selectedpieces.length - 1].currentPosition == IdOfBox) {
    for (
      let i = 0;
      i < selectedpieces[selectedpieces.length - 1].allowedPlays.length;
      i++
    ) {
      console.log('hello');
      preview = parseFloat(
        Math.abs(selectedpieces[selectedpieces.length - 1].allowedPlays[i])
      ).toFixed(1);

      PreviewPlays = document.createElement("div");
      PreviewPlays.classList.toggle("preview-plays");

      positionBoxSelected = document.getElementById(`${preview}`);
      x = preview.split("")[0];
      y = preview.split("")[2];

      //console.log(x, y)
      positionOfBoxInTabuleiro = tabuleiro[x][y];

      if (classOfPieces == "white") {
        if (tabuleiro[x][y] == 2) return 0;
        if (positionBoxSelected && positionOfBoxInTabuleiro == 0) {
          // console.log('hellobro')
          positionBoxSelected.appendChild(PreviewPlays);
        }
      } else if (classOfPieces == "black") {
        if (positionBoxSelected && positionOfBoxInTabuleiro == 0) {
          positionBoxSelected.appendChild(PreviewPlays);
        }
      }
    }
    console.log('hello');
    for (
      let i = 0;
      i < selectedpieces[selectedpieces.length - 1].playsKillOponent.length;
      i++
    ) {
      console.log(previewToKill);
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
  }
}
