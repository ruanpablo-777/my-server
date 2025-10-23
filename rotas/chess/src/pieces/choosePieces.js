let positionTabuleiro;
let selectedpieces = [];
let clicks = 1;
let idOfpieces;
let classOfPieces = [];

box.forEach((element, index) => {
  element.addEventListener("click", () => {
    let IdOfBox = [];

    idOfpieces = element.lastElementChild.id;
    IdOfBox.push(element.id);

    for (let i = 0; i < pieces.length; i++) {
      if (
        pieces[i].nome == idOfpieces &&
        clicks == 1 &&
        pieces[i].class.toString().split("-")[1] == "white"
      ) {
        selectedpieces.push(pieces[i]);
      } else if (
        pieces[i].nome == idOfpieces &&
        clicks == 0 &&
        pieces[i].class.toString().split("-")[1] == "black"
      ) {
        selectedpieces.push(pieces[i]);
      }
    }
    classOfPieces = selectedpieces[selectedpieces.length -1].class.toString().split("-");
    
    if (clicks % 2 == 1) {
      if (classOfPieces[1] == "white") {
       
        verification(selectedpieces,element, IdOfBox, classOfPieces);
      } else {
        selectedpieces = [];
        classOfPieces = [];
      }
    } else if (clicks % 2 == 0) {
      if (classOfPieces[1] == "black") {
      
        verification(selectedpieces,element, IdOfBox, classOfPieces);
      } else {
        selectedpieces = [];
        classOfPieces = [];
      }
    }


  });
});

function verification(selectedpieces,element, IdOfBox, classOfPieces) {
//console.log(selectedpieces)
  switch (classOfPieces[0]) {
    case "pawn":
      createPreviewPlaysPawn(selectedpieces, element, IdOfBox, classOfPieces[1]);
      pawns(
        selectedpieces,element, IdOfBox, classOfPieces[1]
      );

      
      break;
    case "horse":
      createPreviewPlaysHorse(selectedpieces, element, IdOfBox, classOfPieces[1]);
        horse(
        selectedpieces, IdOfBox, classOfPieces[1]
      );
      break;
    case "tower":
      break;

    default:
      break;
  }
}
