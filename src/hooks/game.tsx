import React, { createContext, useContext, useState } from 'react';

interface GameContextData {
   squares: string[];
   setSquares(newSquares: string[]): void;
}

const GameContext = createContext({} as GameContextData);

const GameProvider: React.FC = ({children}) => {
   const [squares, setSquares] = useState<string[]>(() => Array(9).fill(''));

   return (
      <GameContext.Provider
         value={{squares, setSquares}}
      >
         {children}
      </GameContext.Provider>
   )
}

function useGame(): GameContextData {
   const context = useContext(GameContext);

   if (!context) 
      throw new Error('useGame must be used within an AuthProvider');

   return context;
}

export {GameProvider, useGame}

