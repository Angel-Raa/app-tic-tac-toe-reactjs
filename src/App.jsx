import { useState } from "react";
import Square from "./components/SquareComponents";
import { TURNS } from "./constants/Constants";
import { checkWinner, checkEndGame } from "./service/service";
import confetti from "canvas-confetti";
import "./style/index.css";
import "./style/app.css";
import WinnerModal from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [turn, SetTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambia de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    SetTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resertGame = () => {
    setBoard(Array(9).fill(null));
    SetTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resertGame}>Empazar de nuevo </button>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelectd={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelectd={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal winner={winner} resertGame={resertGame} />
      </main>
    </>
  );
}

export default App;
