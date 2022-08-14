import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";
import TaskOne from "./tasks/TaskOne";
import TaskTwo from "./tasks/TaskTwo";

const NavBar = () => {
  let navigate = useNavigate();
  const handleTaskOne = () => {
    navigate("/react-assignment/taskOne");
  };

  const handleTaskTwo = () => {
    navigate("/react-assignment/taskTwo");
  };

  return (
    <Container style={styles.container} maxWidth="lg" fixed>
      <Button style={styles.button} onClick={handleTaskOne} variant="contained">
        Task-One
      </Button>
      <Button style={styles.button} onClick={handleTaskTwo} variant="contained">
        Task-Two
      </Button>
    </Container>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/react-assignment" element={<NavBar />} />
        <Route exact path="/react-assignment/taskOne" element={<TaskOne />} />
        <Route exact path="/react-assignment/taskTwo" element={<TaskTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100vh",
  },
  button: {
    width: "50%",
    fontFamily: "sans-serif",
    fontSize: "20px",
    fontWeight: "600",
  },
};

export default App;
