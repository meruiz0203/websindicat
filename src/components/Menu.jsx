import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
import QuienesSomos from './content/QuienesSomos';
import Afiliados from './content/Afiliados';
import Empresas from './content/Empresas';
import Mutual from './content/Mutual';
import Tusrismo from './content/Turismo';
import Nav from '../components/content/Nav';

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