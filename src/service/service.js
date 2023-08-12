import { WINNER_COMBOS } from "../constants/Constants";
export const checkWinner = (boardChekWinner) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardChekWinner[a] &&
      boardChekWinner[a] === boardChekWinner[b] &&
      boardChekWinner[a] === boardChekWinner[c]
    ) {
      return boardChekWinner[a];
    }
    return null;
  }
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((Square) => Square !== null);
};
