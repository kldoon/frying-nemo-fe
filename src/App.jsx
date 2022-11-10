import React, { useState } from "react";
import AddPage from "./pages/add/add.component";
import Header from "./components/header/header.component";
import ViewPage from "./pages/view/view.component";
import ViewItemPage from "./pages/view-item/view-item.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/login/login.component";

export const UserContext = React.createContext(null);

function App() {

  const initialUser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(initialUser);

  const setUserOverride = user => {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (

    <UserContext.Provider value={{ user, setUser: setUserOverride }}>

      <div>

        <BrowserRouter>

          <Header />

          <Routes>

            <Route path="/" element={<Navigate to="/view" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />} />
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/*" element={<NotFoundPage />} />

          </Routes>

        </BrowserRouter>


      </div>
    </UserContext.Provider>
  );
}

export default App;
