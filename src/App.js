import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";
import TaskOne from "./tasks/TaskOne";
import TaskTwo from "./tasks/TaskTwo";

const NavBar = () => {
  let navigate = useNavigate();
  const handleTaskOne = () => {
    navigate("/taskOne");
  };

  const handleTaskTwo = () => {
    navigate("/taskTwo");
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
    <BrowserRouter basename="/react-assignment">
      <Routes>
        <Route exact path="/" element={<NavBar />} />
        <Route path="/taskOne" element={<TaskOne />} />
        <Route path="/taskTwo" element={<TaskTwo />} />
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
