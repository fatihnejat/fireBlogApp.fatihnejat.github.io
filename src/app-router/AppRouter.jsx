import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginContextProvider from "../context/LoginContextProvider";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";
import Register from "../pages/Register";
import UpdatePost from "../pages/UpdatePost";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="" element={<PrivateRouter />}>
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/updatepost" element={<UpdatePost/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
};

export default AppRouter;
