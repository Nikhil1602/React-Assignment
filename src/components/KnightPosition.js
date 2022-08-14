import React from "react";
import KNIGHT from "../assets/knight.png";
import { Container, Box } from "@mui/material";

const KnightPosition = (i, id, style1, style2, addRef) => {
  if (i & 1) {
    return (
      <Box id={id} key={i} className={style1} ref={addRef}>
        <img src={KNIGHT} alt="knight" className="img-knight" />
      </Box>
    );
  } else {
    return (
      <Box id={id} key={i} className={style2} ref={addRef}>
        <img src={KNIGHT} alt="knight" className="img-knight" />
      </Box>
    );
  }
};

export default KnightPosition;
