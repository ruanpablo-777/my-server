let pieces = [];
//PAWN
for (let i = 0; i < 8; i++) {
  let decimalSum = `0.${i}`;
  // console.log(parseFloat(parseFloat(decimalSum)).toFixed(1))
  let id = i;
  let position = parseFloat(decimalSum) + 6.0;
  let oneStep = 1.0;
  let twoStep = 2.0;
  let firstKillStep = 1.1;
  let secondKillStep = 0.9;

  pieces.push({
    id: id,
    nome: `peao-white${i}`,
    class: "pawn-white",
    currentPosition: position,
    allowedPlays: [
      parseFloat(position) - oneStep,
      parseFloat(position) - twoStep,
    ],
    steps: [oneStep, twoStep],
    playsKillOponent: [
      parseFloat(position) - firstKillStep,
      parseFloat(position) - secondKillStep,
    ],
    stepsToKillEnemy: [firstKillStep, secondKillStep],
    icon: '<img src="img/pieces-svg/bpawn-w.svg" alt="" srcset="">',
  });
}

for (let i = 0; i < 8; i++) {
  let decimalSum = `0.${i}`;
  // console.log(parseFloat(parseFloat(decimalSum)).toFixed(1))
  let id = i;
  let position = parseFloat(decimalSum) + 1.0;
  let oneStep = 1.0;
  let twoStep = 2.0;
  let firstKillStep = 1.1;
  let secondKillStep = 0.9;

  pieces.push({
    id: id,
    nome: `peao-black${i}`,
    class: "pawn-black",
    currentPosition: position,
    allowedPlays: [
      parseFloat(position) + oneStep,
      parseFloat(position) + twoStep,
    ],
    steps: [oneStep, twoStep],
    playsKillOponent: [
      parseFloat(position) + firstKillStep,
      parseFloat(position) + secondKillStep,
    ],
    stepsToKillEnemy: [firstKillStep, secondKillStep],
    icon: '<img src="img/pieces-svg/bpawn-b.svg" alt="" srcset="">',
  });
}
// HORSE
for (let i = 0; i < 8; i++) {
  if (i == 1 || i == 6) {
    let decimalSum = `0.${i}`;
    let id = i;
    let position = parseFloat(decimalSum) + 7.0;
    let oneStep = 1.2;
    let twoStep = 2.1;
    let threeStep = 1.9;
    let foutStep = 0.8;
    let fiveStep = -0.8;
    let sixStep = -1.9;
    let sevenStep = -2.1;
    let eightStep = -1.2;
    pieces.push({
      id: id,
      nome: `horse-white${i}`,
      class: "horse-white",
      currentPosition: position,
      allowedPlays: [
        parseFloat(position) - oneStep,
        parseFloat(position) - twoStep,
        parseFloat(position) - threeStep,
        parseFloat(position) - foutStep,
        parseFloat(position) - fiveStep,
        parseFloat(position) - sixStep,
        parseFloat(position) - sevenStep,
        parseFloat(position) - eightStep,
      ],
      steps: [
        oneStep,
        twoStep,
        threeStep,
        foutStep,
        fiveStep,
        sixStep,
        sevenStep,
        eightStep,
      ],

      playsKillOponent: [
        parseFloat(position) - oneStep,
        parseFloat(position) - twoStep,
        parseFloat(position) - threeStep,
        parseFloat(position) - foutStep,
        parseFloat(position) - fiveStep,
        parseFloat(position) - sixStep,
        parseFloat(position) - sevenStep,
        parseFloat(position) - eightStep,
      ],
      stepsToKillEnemy: [
        oneStep,
        twoStep,
        threeStep,
        foutStep,
        fiveStep,
        sixStep,
        sevenStep,
        eightStep,
      ],

    icon: '<img src="img/pieces-svg/centaur-w.svg" alt="" srcset="">',
    });
    
  }
}

// HORSE
for (let i = 0; i < 8; i++) {
  if (i == 1 || i == 6) {
    let decimalSum = `0.${i}`;
    let id = i;
    let position = parseFloat(decimalSum) + 0.0;
    let oneStep =  -1.2;
    let twoStep = -2.1;
    let threeStep = 1.9;
    let foutStep = -0.8;
    let fiveStep = 0.8;
    let sixStep = 1.9;
    let sevenStep = 2.1;
    let eightStep = 1.2;
    pieces.push({
      id: id,
      nome: `horse-black${i}`,
      class: "horse-black",
      currentPosition: position,
      allowedPlays: [
        parseFloat(position) + oneStep,
        parseFloat(position) + twoStep,
        parseFloat(position) + threeStep,
        parseFloat(position) + foutStep,
        parseFloat(position) + fiveStep,
        parseFloat(position) + sixStep,
        parseFloat(position) + sevenStep,
        parseFloat(position) + eightStep,
      ],
      steps: [
        oneStep,
        twoStep,
        threeStep,
        foutStep,
        fiveStep,
        sixStep,
        sevenStep,
        eightStep,
      ],

      playsKillOponent: [
        parseFloat(position) + oneStep,
        parseFloat(position) + twoStep,
        parseFloat(position) + threeStep,
        parseFloat(position) + foutStep,
        parseFloat(position) + fiveStep,
        parseFloat(position) + sixStep,
        parseFloat(position) + sevenStep,
        parseFloat(position) + eightStep,
      ],
      stepsToKillEnemy: [
        oneStep,
        twoStep,
        threeStep,
        foutStep,
        fiveStep,
        sixStep,
        sevenStep,
        eightStep,
      ],

    icon: '<img src="img/pieces-svg/centaur-b.svg" alt="" srcset="">',
    });
  }
}



//tower

for (let i = 0; i < 8; i++) {
  if(i == 0 || i == 7) {
    
    let decimalSum = `2.${i}`;
    // console.log(parseFloat(parseFloat(decimalSum)).toFixed(1))
    let id = i;
    let position = parseFloat(decimalSum) + 1.0;
    let oneStep = 1.0;
    let twoStep = 0.1;
    let threeStep = - 1.0;
    let fourStep = - 0.1;
    let steps = [oneStep, twoStep,threeStep,fourStep]
    let allowedPlays = []

    pieces.push({
    id: id,
    nome: `tower-black${i}`,
    class: "tower-black",
    currentPosition: position,
    
    allowedPlays: allowedPlays,
    steps: steps,
    playsKillOponent: [
      parseFloat(position), 
      parseFloat(position) 
    ],
    stepsToKillEnemy: [],
    icon: '<img src="img/pieces-svg/rook-b.svg" alt="" srcset="">',
  });
}
}
//console.log(pieces[pieces.length-1])