import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { InputFields, SelectionField } from "../components";
import { Form, ShowFriends, ShowResults } from "../components";
import { Link } from "react-router-dom";

const TaskOne = () => {
  const [relation, setRelation] = useState("friend");
  const [friends, setFriends] = useState({ friendA: "", friendB: "" });
  const [add, setAdd] = useState([]);
  const [conn, setConn] = useState({});
  const [links, setLinks] = useState([]);

  const handleSubmit = (e) => {
    if (friends.friendA != "" && friends.friendB != "") {
      let { friendA, friendB } = friends;

      conn[friendA]
        ? setConn({ ...conn, [friendA]: [...conn[friendA], friendB] })
        : setConn({ ...conn, [friendA]: [friendB] });

      if (!add.includes(friendA)) {
        add.push(friendA);

        if (!add.includes(friendB)) {
          add.push(friendB);
        }
      } else {
        if (!add.includes(friendB)) {
          add.push(friendB);

          if (!add.includes(friendA)) {
            add.push(friendA);
          }
        }
      }
      setFriends({ friendA: "", friendB: "" });
    }
  };

  return (
    <Container style={styles.container} maxWidth="lg" fixed>
      <Form>
        <InputFields friends={friends} setFriends={setFriends} />
        <SelectionField relation={relation} setRelation={setRelation} />
        <Button
          style={styles.button}
          onClick={handleSubmit}
          variant="contained">
          ADD
        </Button>
      </Form>
      <Link to="/taskOne"></Link>
      <ShowFriends add={add} links={links} setLinks={setLinks} />
      <ShowResults conn={conn} links={links} />
    </Container>
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
    width: "100%",
    fontFamily: "sans-serif",
    fontSize: "20px",
    fontWeight: "600",
  },
};

export default TaskOne;
