import React from 'react';
import { useGame } from '../../hooks/game';

import './styles.css'

interface SquareProps {
   value: string,
   index: number
}

const borderPositions = {
   top: [0,1,2],
   left: [0,3,6 ],
   right: [2,5,8],
   bottom: [6,7,8]
}

const Square: React.FC<SquareProps> = ({value, index}) => {
   const {squares, setSquares, isXNext, setIsXNext, isBlocked} = useGame()
   
   function handleClickSquare() {
      if (squares[index] || isBlocked)
         return

      const newSquares = [...squares];
      newSquares[index] = isXNext ? 'X' : 'O';
      setIsXNext(!isXNext)
      setSquares(newSquares);
   }
   return (
      <button 
         className={`
            square 
            ${(value || isBlocked) && "blocked"}
            ${borderPositions.top.includes(index) && "square-top"}
            ${borderPositions.left.includes(index) && "square-left"}
            ${borderPositions.right.includes(index) && "square-right"}
            ${borderPositions.bottom.includes(index) && "square-bottom"}
            ${value === 'O' && "o-color"}
         `} 
         onClick={() => {handleClickSquare()}}
      >
        <strong>{value}</strong>
     </button>
  );
}

export default Square;