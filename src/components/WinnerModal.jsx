import Square from "../components/SquareComponents";
// eslint-disable-next-line react/prop-types
const WinnerModal = ({winner, resertGame})=> {
    const winnerText = winner === false ? "Empate" : "Gano"
    return(
        <>
        {winner !== null && (
          <section className="winner">
            <div>
              <h2>{winnerText}</h2>
              <header className="win">
                <div className="text">
                  {winner && <Square>{winner}</Square>}
                </div>
              </header>
              <footer>
                <button onClick={resertGame}>Empazar de nuevo </button>
              </footer>
              
            </div>
          </section>
        )}
        </>
    )
}

export default WinnerModal;