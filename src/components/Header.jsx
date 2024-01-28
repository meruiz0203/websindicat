import logo from './logo.jpeg'; 
import './header.css';
import Nav from "./Nav";

function Header() {
  return (
   <div>
      <img src={logo} className="" alt="Logo" />
      <h1>
        <span>Sindicato Petróleo, Gas & </span>
        <span>BioCombustible Privado de Cuyo</span>
        </h1>
        <Nav/>
    </div>
        )
}

export default Header;
