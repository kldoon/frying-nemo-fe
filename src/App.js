// import { useState } from "react";

import Head from "./components/pop/header";
import AddPage from "./pages/add/add.component";
import NotFound from "./pages/not-found/notfound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewPage from "./pages/view/view";
import ViewItemPage from "./pages/veiw-item/view-item";
import './App.css';
import Login from "./pages/login/login";
import { useState } from "react";
function App() {
const [user,setUser]=useState(null);
  return (
    <div>
      
      <BrowserRouter>
        <Head user={user}/>
        <Routes>
          <Route path="/add" element={<AddPage user={user} />} />
          <Route path="/*" element={<NotFound /> } />
          <Route path="/view/:id" element={<ViewItemPage   />} />
          <Route path="/view" element={<ViewPage user={user}/>} />
          <Route path="/" element={<Navigate to='/view' replace />} />
          <Route path="/login" element={<Login  user={user} setuser={setUser} />}  />
          {/* <Route path="/*" element={<Navigate to='/add' />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;