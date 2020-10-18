import React from 'react';
import { GameProvider } from './hooks/game';
import Home from './pages/Home';

const App:React.FC = () => {
  return (
    <GameProvider>
      <Home />
    </GameProvider>
  );
}

export default App;
