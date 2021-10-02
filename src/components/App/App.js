import ToolBar from '../ToolBar/ToolBar';
import Content from '../Content/Content';

import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    tabs: ["Default Image", "Upload File", "Use Camera"], 
    selectedTab: "Default Image"
  })

  const handleClick = (text) => {
    
    setState( (prevState) => {
      return {...prevState, selectedTab: text}
    } )
  }

  return (
    <div className="App">
      <ToolBar tabs={state.tabs} selectedItem={state.selectedTab} handleClick={handleClick} />
      <Content selectedItem={state.selectedTab} />
    </div>
  );
}

export default App;
