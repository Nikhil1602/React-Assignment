import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChessBoard } from "../components";

const AvailablePosition = (pos) => {
  let x = [1, -1, 2, -2, -2, 2, -1, 1];
  let y = [2, 2, 1, 1, -1, -1, -2, -2];
  let res = [];
  let temp1 = [];
  let temp2 = [];

  for (let i = 0; i < 8; i++) {
    temp1.push(pos[0] + x[i]);
    temp2.push(pos[1] + y[i]);
  }

  for (let i = 0; i < 8; i++) {
    if (temp1[i] > 0 && temp2[i] < 9 && temp2[i] > 0 && temp2[i] < 9) {
      let id = `${temp1[i]}${temp2[i]}`;
      res.push(id);
    }
  }

  return res;
};

const TaskTwo = () => {
  const [pos, setPos] = useState([2, 3]);
  let spaces = AvailablePosition(pos);

  useEffect(() => {
    const showSpaces = () => {
      for (let i = 0; i < spaces.length; i++) {
        let value = document.getElementById(spaces[i]);
        value.innerHTML = `<span class="mark-pos"></span>`;
        value.addEventListener("click", () => {
          setPos([parseInt(spaces[i][0]), parseInt(spaces[i][1])]);

          for (let i = 0; i < spaces.length; i++) {
            let target = document.getElementById(spaces[i]);
            if (target.innerHTML != "") {
              target.innerHTML = "";
            } else {
              target.innerHTML = `<span class="mark-pos"></span>`;
            }
          }
        });
      }
    };

    return showSpaces();
  }, [pos]);

  return (
    <Container maxWidth="lg" style={styles.container}>
      <ChessBoard pos={pos} />
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
  chessboard: {
    width: "70%",
    height: "80%",
    boxShadow: "0px 0px 30px gray",
  },
  row: {
    display: "flex",
  },
};

export default TaskTwo;
