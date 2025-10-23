let box = document.querySelectorAll(".box");

box.forEach((element) => {
    for (let i = 0; i < pieces.length; i++) {
        
        let positionBox = element.id.toString()
        let positionPieces = pieces[i].currentPosition.toFixed(1)
        
       // console.log( positionPieces)
        if (positionBox == positionPieces) {
            const pecass = document.createElement("div");
            pecass.id = pieces[i].nome
            pecass.innerHTML = pieces[i].icon
            pecass.classList.add(pieces[i].class);
            element.appendChild(pecass);
            
        }}
    }
    )


