import React from 'react';
import { DndProvider } from 'react-dnd';
import Html5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={Html5Backend}>
      <Header/>
      <Board></Board>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
