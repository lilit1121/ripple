import './assets/styles/main.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile"
import Login from "./views/Login";
import Registration from "./views/Registration";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route index path="/" element={ <Home/> } />
      <Route path="/profile" element={ <Profile/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/registration" element={ <Registration/> } />
      <Route element={ <NotFound/> } />
    </Routes>
  );
}

export default App;
