import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
<NavLink to="/"> Home</NavLink>
<NavLink to="/QuienesSomos"> Quienes Somos</NavLink>
<NavLink to="/Afiliados"> Afiliados</NavLink>
<NavLink to="/Empresas"> Empresas</NavLink>
<NavLink to="/Mutual"> Mutual</NavLink>
<NavLink to="/Turismo"> Turismo</NavLink>



    </nav>
  )
}

export default Nav
