import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { googleRegister, LoginUser } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    LoginUser(email,password)
    navigate("/")
  };
  const handleGoogleSubmit = () => {
    googleRegister();
    navigate("/")
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "600px",
        boxShadow: 12,
        borderRadius: "20px",
        margin: "auto",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <img
        width="300px"
        src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1668656581~exp=1668657181~hmac=964c1edf277e2309f354d75059f9e51863557b27b9bf075db3aa40f92702947e"
        alt=""
      />
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        sx={{ width: "450px" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        margin="normal"
        sx={{ width: "450px" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button  variant="contained" onClick={handleSubmit}  sx={{ width: "250px" }}> 
        Log in
      </Button>
      <Button onClick={handleGoogleSubmit} variant="contained"  sx={{ width: "250px", marginTop: "1rem" }}>
         With Google
        <img width= "50px" src="https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8.jpg" alt="" />
      </Button>

    </Box>
  );
};

export default Login;
