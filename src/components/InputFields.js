import React from "react";
import { TextField } from "@mui/material";

const InputFields = ({ friends, setFriends }) => {
  const handleFriendA = (e) => {
    setFriends({ ...friends, friendA: e.target.value });
  };

  const handleFriendB = (e) => {
    setFriends({ ...friends, friendB: e.target.value });
  };

  return (
    <>
      <TextField
        style={styles.input1}
        value={friends.friendA}
        onChange={handleFriendA}
        label="Friend-A"
        variant="outlined"
      />
      <TextField
        style={styles.input2}
        value={friends.friendB}
        onChange={handleFriendB}
        label="Friend-B"
        variant="outlined"
      />
    </>
  );
};

const styles = {
  input1: {
    width: "49%",
    marginBottom: "10px",
    marginRight: "6px",
  },
  input2: {
    width: "49%",
    marginBottom: "10px",
    marginLeft: "6px",
  },
};

export default InputFields;
