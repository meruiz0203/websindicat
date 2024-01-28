import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
import QuienesSomos from '../QuienesSomos';
import Afiliados from '../Afiliados';
import Empresas from '../Empresas';
import Mutual from '../Mutual';
import Tusrismo from '../Turismo';
import Nav from '../Nav';

function Menu (){
    return (
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
  <Route path="/Afiliados" element={<Afiliados/>}/>
  <Route path="/Empresas" element={<Empresas/>}/>
  <Route path="/Mutual" element={<Mutual/>}/>
  <Route path="/Turismo" element={<Tusrismo/>}/>
</Routes>
</BrowserRouter>
    )

}
export default Menu;