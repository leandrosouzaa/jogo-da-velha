import React from 'react';
import { useGame } from '../../hooks/game';

import './styles.css';

const Points: React.FC = () => {
   const {points} = useGame();
   
   return (
      <div className="points-container">
         <div>
            <p className="title">Jogador X</p>
            <strong className="value">{points.x}</strong>
         </div>
         <div>
            <p className="title">Velha</p>
            <strong className="value">{points.tie}</strong>
         </div>
         <div>
            <p className="title">Jogador O</p>
            <strong className="value">{points.o}</strong>
         </div>
      </div>      
   )
}
   
   export default Points;