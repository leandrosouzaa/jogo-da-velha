import React from 'react';
import {GameInfo, Square} from '../components';
import { useGame } from '../hooks/game';

const Home: React.FC = () => {
   const { squares } = useGame();
   
   return (
      <main className="container">
         <div className="game-container">
            <GameInfo />
            <div className="squares-container">
               {squares.map((square, index) => (
                  <Square key={index} value={square} index={index} />
               ))}
            </div>
            
         </div>
      </main>
   );
}

export default Home;