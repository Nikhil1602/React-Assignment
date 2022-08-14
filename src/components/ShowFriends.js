import React, { useState } from "react";
import { Box, Checkbox, Typography } from "@mui/material";

const label = {
  inputProps: { "aria-label": "Checkbox demo" },
};

const Field = ({ val, key, links, setLinks }) => {
  const handleChange = (e) => {
    if (e.target.checked) {
      setLinks([...links, e.target.value]);
    } else {
      links.length && setLinks(links.filter((name) => name !== e.target.value));
    }
  };
  return (
    <>
      <Box component="div" key={key} style={styles.friend}>
        <Checkbox {...label} onChange={handleChange} value={val} />
        <Typography variant="h6" style={styles.text}>
          {val}
        </Typography>
      </Box>
    </>
  );
};

const ShowFriends = ({ add, links, setLinks }) => {
  return (
    <Box component="div" style={styles.friends}>
      {add.length
        ? add.map((val, ind) => (
            <Field key={ind} val={val} setLinks={setLinks} links={links} />
          ))
        : ""}
    </Box>
  );
};

const styles = {
  friends: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    width: "100%",
    height: "20%",
    backgroundColor: "#ffff",
    borderRadius: 10,
    boxShadow: "0px 0px 10px grey",
  },
  friend: {
    display: "flex",
    width: 150,
    height: 50,
    backgroundColor: "#ffaa00",
    margin: 10,
    color: "#ffff",
    borderRadius: 5,
    border: "none",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
  },
};

export default ShowFriends;
