import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createUser, googleRegister } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerMail, setRegisterMail] = useState("");    //! 1. önce use state
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    createUser(registerMail, registerPassword); //! 4- firebase kısmına geldik oraya git gel
    navigate("/");
  };
  const handleGoogleSubmit = () => { //!5- google ile giriş firebase kısmına git gel
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
        width="400px"
        src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1668658595~exp=1668659195~hmac=1c4cdcc32625babf3d44749c799dd5fbb025a67f54fb6de98f71b7b6bf975bb7"
        alt=""
      />
      <TextField
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        sx={{ width: "450px" }}
        onChange={(e) => setRegisterMail(e.target.value)} //! 2- onchange tanımla
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        margin="normal"
        sx={{ width: "450px" }}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <Button
        size="large"
        variant="contained"
        onClick={handleSubmit} //! 3- butona click 
        sx={{ width: "250px" }}
      >
        Register
      </Button>
      <Button onClick={handleGoogleSubmit} variant="contained" sx={{ width: "250px", marginTop: "1rem" }}>
        With Google
        <img
          width="50px"
          src="https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8.jpg"
          alt=""
        />
      </Button>
    </Box>
  );
};

export default Register;
