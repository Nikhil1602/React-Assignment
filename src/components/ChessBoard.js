import React, { useRef } from "react";
import KnightPosition from "./KnightPosition";
import { Box } from "@mui/material";

const makeBlocks = (key, blocks, style1, style2, pos, ref) => {
  blocks = [];
  let block;
  let position = `${pos[0]}${pos[1]}`;

  const addRef = (e) => {
    if (e && !ref.current.includes(e)) {
      ref.current.push(e);
    }
  };

  for (let i = 1; i <= 8; i++) {
    let id = `${key}${i}`;
    if (i & 1) {
      block = <Box id={id} key={i} className={style1} ref={addRef}></Box>;
    } else {
      block = <Box id={id} key={i} className={style2} ref={addRef}></Box>;
    }
    if (id === position) {
      block = KnightPosition(i, id, style1, style2, addRef);
    }
    blocks.push(block);
  }
  return blocks;
};

const ChessBoard = ({ pos }) => {
  let blocks = [];
  const ref = useRef([]);
  ref.current = [];
  let black = "blocks black-block";
  let white = "blocks white-block";

  let Rows = [];
  let style1 = white;
  let style2 = black;

  for (let i = 1; i <= 8; i++) {
    if (i & 1) {
      style1 = black;
      style2 = white;
    } else {
      style1 = white;
      style2 = black;
    }
    Rows.push(
      <Box style={styles.row} key={i}>
        {makeBlocks(i, blocks, style1, style2, pos, ref)}
      </Box>
    );
  }

  let Board = [];
  Board.push(Rows);

  return <Box style={styles.chessboard}>{Board}</Box>;
};

const styles = {
  chessboard: {
    width: "70%",
    height: "80%",
    boxShadow: "0px 0px 30px gray",
  },
  row: {
    display: "flex",
  },
};

export default ChessBoard;
