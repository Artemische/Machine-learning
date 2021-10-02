import ToolBarItem from '../ToolBarItem/ToolBarItem'

import "./ToolBar.css";

function ToolBar({tabs, selectedItem, handleClick}) {

  const ToolBarItems = tabs.map( (text, ind) => 
    <ToolBarItem key={ind.toString()} text={text} handleClick={handleClick} type={text === selectedItem ? "active" : "" } />
  )

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {ToolBarItems}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ToolBar;
