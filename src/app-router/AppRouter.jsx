import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginContextProvider from "../context/LoginContextProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";
import Register from "../pages/Register";

const AppRouter = () => {

    
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newpost" element={ <NewPost/> } /> 
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
};

export default AppRouter;
