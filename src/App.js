import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserInfo from './components/UserInfo';
import Catalogo from "./pages/Catalogo";
import ItemDetailContainer from "./pages/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserInfo />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/catalogo/:id' element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;