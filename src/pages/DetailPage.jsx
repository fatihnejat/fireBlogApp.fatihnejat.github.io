import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import { DeletePost, EditPost } from "../helpers/functions";

const DetailPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(LoginContext);
  const { id } = useParams;
  const { state } = useLocation();
  const handleDelete = () => {
    DeletePost(state.id);
    navigate(-1);
  };
  const handleEdit = () => {
    navigate("/updatepost", {state: state} )
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "3rem",
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      <h1> {state.title} </h1>
      <h2> {state.content} </h2>
      <img src={state.imgUrl} alt="" />

      {currentUser.email === state.email && (
        <>
          <Button onClick={handleEdit} variant="contained">Edit</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </>
      )}
    </Container>
  );
};

export default DetailPage;
