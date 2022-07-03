import React from 'react';
import Tetragon from './components/Tetragon';

function App() {
  return (
    <div>
        <Tetragon 
        width={100} 
        height={100} 
        background={'gray'} 
        onClick={() => console.log('ok')
        }>
          <span>TEXT</span>
        </Tetragon>
    </div>
  );
}

export default App;
