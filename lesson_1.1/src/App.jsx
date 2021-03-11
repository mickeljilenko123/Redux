import React from 'react';
import Paint from './Paint';
import PaintList from './PaintList'
import paintings from './paintings.json'

function App() {
    return ( 
       <div>
           <PaintList items = {paintings}>
              <Paint />
            </ PaintList>
       </div>
    )
}
export default App;