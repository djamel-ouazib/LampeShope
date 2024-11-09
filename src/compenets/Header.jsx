import ease from '../assets/ease.svg'
import '../styles/Header.css'
function Header() {
    
  
    return (
      <>
     <div className="Header">
     <img src={ease} alt="logo" />   
     <ul className='navbar'>
        <li><a href="#">Collection</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
     </ul>
     </div>
   
      </>
    )
  }
  
  export default Header