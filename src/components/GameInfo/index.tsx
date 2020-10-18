import React from 'react';
import { useGame } from '../../hooks/game';

import './styles.css';

const GameInfo: React.FC = () => {
   const {isXNext, lastWinner} = useGame()

   return (
      <div className="game-info">
         <p className="player">Jogador Atual: <span className="player-value">{isXNext ? 'X' : 'O'}</span></p>
         <p className="player">Ultimo vencedor: <span className="player-value">{lastWinner}</span></p>
      </div>
   );
}

export default GameInfo;