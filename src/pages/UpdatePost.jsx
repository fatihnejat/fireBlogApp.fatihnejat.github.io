import { Box, Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPost } from "../helpers/functions";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [editInfo, setEditInfo] = useState(state);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditInfo({ ...editInfo, [name]: value });
  };
  const handleEdit = () => {
    EditPost(editInfo);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "760px",
        boxShadow: 12,
        borderRadius: "20px",
        margin: "auto",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <img
        width="300px"
        src="https://img.freepik.com/free-vector/add-files-concept-illustration_114360-341.jpg?w=740&t=st=1668774252~exp=1668774852~hmac=5bc77556396d41bb1ca82647cb8dc512c1ed81633eef2c808c35de2e42e679b8"
        alt=""
      />
      <TextField
        id="outlined-basic"
        // label="New Post Title *"
        variant="outlined"
        margin="normal"
        sx={{ width: "400px" }}
        value={editInfo.title}
        name="title"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        // label="Image URL *"
        variant="outlined"
        margin="normal"
        sx={{ width: "400px" }}
        value={editInfo.imgUrl}
        name="imgUrl"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        // label="Content *"
        variant="outlined"
        margin="normal"
        sx={{
          width: "400px",
          "& .MuiInputBase-root": {
            height: "200px",
          },
        }}
        value={editInfo.content}
        name="content"
        onChange={handleChange}
      />
      <Button onClick={handleEdit} sx={{ width: "400px" }} variant="contained">
        Edit
      </Button>
    </Box>
  );
};

export default UpdatePost;
