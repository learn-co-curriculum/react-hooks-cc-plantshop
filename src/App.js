import React from 'react';
import Plantsy from './Plantsy'; // Importing the Plantsy component

function App() {
  return (
    <div className="app">
      <header>
        <h1>
          🌱 Plantsy
        </h1>
      </header>
      <main>
        {/* Now you can use the Plantsy component */}
        <Plantsy />
      </main>
    </div>
  );
}

export default App;
