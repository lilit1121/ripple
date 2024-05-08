import { Route, Routes } from "react-router-dom";

import "./assets/styles/main.scss";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Registration from "./views/Registration";
import NotFound from "./views/NotFound";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
