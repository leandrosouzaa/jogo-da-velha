import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import checkWinner from '../utils/checkWinner'

interface GameContextData {
   squares: string[];
   setSquares(newSquares: string[]): void;
   isXNext: boolean;
   setIsXNext(value: boolean): void;
   isBlocked: boolean;
   lastWinner: string;
   restart():void;
}

interface PointsProps {
   x: number;
   o: number;
}

const GameContext = createContext({} as GameContextData);

const GameProvider: React.FC = ({children}) => {
   const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
   const [isXNext, setIsXNext] = useState(true);
   const [points, setPoints] = useState<PointsProps>({o: 0, x: 0});
   const [lastWinner, setLastWinner] = useState('');
   const [isBlocked, setIsBlocked] = useState(false)

   useEffect(() => {
      const winner: string = checkWinner(squares); 
      
      if (!winner)
         return;
      
      setLastWinner(winner);
      setPoints({...points, [winner.toLowerCase()]: points[winner.toLowerCase()] + 1});
      setIsBlocked(true);
      alert(`O Jogador ${winner} ganhou! Parabéns!!`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [squares]);

   const restart = useCallback(() => {
      setSquares(Array(9).fill(''));
      setIsXNext(true);
      setIsBlocked(false)
   }, [])

   const valuesToProvider = {
      squares,
      setSquares,
      isXNext, 
      setIsXNext,
      isBlocked,
      lastWinner,
      restart
   }

   return (
      <GameContext.Provider
         value={valuesToProvider}
      >
         {children}
      </GameContext.Provider>
   )
}

function useGame(): GameContextData {
   const context = useContext(GameContext);

   if (!context) 
      throw new Error('useGame must be used within an GameProvider');

   return context;
}

export {GameProvider, useGame}

