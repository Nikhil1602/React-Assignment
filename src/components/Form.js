import React from "react";
import Box from "@mui/material/Box";

const Form = ({ children }) => {
  return (
    <Box
      component="form"
      style={styles.form}
      sx={{ backgroundColor: "#ffff" }}
      autoComplete="off">
      {children}
    </Box>
  );
};

const styles = {
  form: {
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 5px 20px #9a9292",
  },
};

export default Form;
