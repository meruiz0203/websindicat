import logo from '../asset/logo.jpeg'; 
import './header.css';
import Menu from "./Menu";

function Header() {
  return (
    <header>
   <div>
      <img src={logo} className="header" alt="Logo" />
      <h1>
        <span>Sindicato Petróleo, Gas & </span>
        <span>BioCombustible Privado de Cuyo</span>
        </h1>
        <Menu/>
    </div>
    </header>
  
        )
}

export default Header;
