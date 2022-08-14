import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectionField = ({ relation, setRelation }) => {
  const handleRelation = (e) => {
    setRelation(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Relation</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        style={{ marginBottom: 10 }}
        label="Relation"
        value={relation}
        onChange={handleRelation}>
        <MenuItem value="friend">Friend</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectionField;
