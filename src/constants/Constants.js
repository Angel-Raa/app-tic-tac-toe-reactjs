export const TURNS = {
  X: "✖️",
  O: "⭕",
};

export const WINNER_COMBOS = [
  // Tres en línea horizontales
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Tres en línea verticales
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Dos diagonales
  [0, 4, 8],
  [2, 4, 6],
];