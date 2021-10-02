import './ToolBarItem.css'

export default function ToolBarItem({text, type, handleClick}){

  const onLinkClick = (e) => {
    const text = e.target.textContent; 
    
    handleClick(text);
  }
  
  return(
    <button type="button" onClick={onLinkClick} className={`nav-link ${type}`} alt={text} >{text}</button>
  )
}