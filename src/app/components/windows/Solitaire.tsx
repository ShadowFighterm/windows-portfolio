import { useState } from 'react';

export default function Solitaire() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="h-full bg-[#008000] p-6 flex flex-col items-center justify-center">
      {!gameStarted ? (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🃏</div>
          <h2 className="text-3xl font-bold text-white">Solitaire</h2>
          <button
            onClick={() => setGameStarted(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold"
          >
            New Game
          </button>
          <p className="text-white text-sm">Classic Windows XP Solitaire</p>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="grid grid-cols-7 gap-2 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-28 bg-white border-2 border-black rounded shadow-lg flex items-center justify-center text-4xl cursor-pointer hover:shadow-xl transition-shadow"
              >
                {i === 0 ? '🂡' : '🂠'}
              </div>
            ))}
          </div>
          
          <div className="text-white space-y-2">
            <p className="text-xl font-bold">Score: 0</p>
            <p className="text-sm">Moves: 0</p>
          </div>

          <button
            onClick={() => setGameStarted(false)}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Reset Game
          </button>
          
          <p className="text-white text-xs italic">
            This is a demo version. Full game logic coming soon!
          </p>
        </div>
      )}
    </div>
  );
}
