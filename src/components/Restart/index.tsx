import React from 'react';
import { useGame } from '../../hooks/game';

import  './styles.css';

const Restart: React.FC = () => {
   const {restart, isBlocked} = useGame();

   if (!isBlocked) {
      return null;
   }

   return (
      <button className="restart" onClick={restart}>
         Reiniciar     
      </button>
   )
}

export default Restart;