import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './Router/Router';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <main className="App">
      <ContextProvider>
        <Router />
      </ContextProvider>
    </main>
  );
}

export default App;
