import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ShowResults = ({ conn, links }) => {
  let res = [];
  links.length && res.push(links[0]);
  for (let i = 0; i < links.length; i++) {
    let temp = conn[links[i]];
    let j = 0;
    while (temp) {
      res.push(temp[j]);
      temp = conn[temp[j]];
    }
  }
  // console.log(res);

  let name = "";
  res.map((val, ind) => {
    name += ind == res.length - 1 ? `${val}` : `${val} > ${" "}`;
  });

  return (
    <Box component="div" style={styles.result}>
      <Box component="div" style={styles.show}>
        <Typography style={styles.text}>{name}</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  show: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  result: {
    width: "100%",
    height: "30%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    boxShadow: "0px 0px 10px grey",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
};

export default ShowResults;
