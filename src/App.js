import React, { useContext } from "react";
import { GameContext } from "./context/GameContext";

function App() {
  const { board, winner, updateBoard, resetGame } = useContext(GameContext);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-4 w-48 mx-auto">
          {board.map((cell, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white text-3xl font-bold flex items-center justify-center h-16 cursor-pointer"
              onClick={() => updateBoard(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {winner && (
          <div className="text-center mt-4">
            {winner === "draw" ? (
              <h2 className="text-xl">It's a draw!</h2>
            ) : (
              <h2 className="text-xl">
                Player <span className="font-bold">{winner}</span> wins!
              </h2>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
