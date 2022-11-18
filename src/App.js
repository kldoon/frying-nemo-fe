import AddPage from "./pages/add/add/add.component";
import ViewPage from "./pages/add/view/view.component";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ViewItemPage from "./pages/add/view/view-item/view-item.component";
import LoginPage from "./pages/add/login/login.component";
import Header from "./components/core/header/header.component";
import NotFound from "./pages/add/not-found/not-found.component";
import UserProvider from "./components/provider/user-provider.component";



const initialState = [];

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
          <Routes >
            <Route path="/" element={<Navigate to="/view" replace/>}/>
            <Route path="/add" element={<AddPage />} />
            <Route path="/view" element={<ViewPage />}></Route>
            <Route path="/view-details/:id" element={<ViewItemPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
          </BrowserRouter>
          </UserProvider>
    

  );
}
export default App;


