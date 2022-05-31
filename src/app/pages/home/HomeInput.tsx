import { TextField } from "@mui/material";
import React from "react";

interface HomeInputI {
  onInputChange: (input: string) => void;
  title: string;
  notes?: string;
  defaultValue?: string;
}
function HomeInput(props: HomeInputI) {
  const { onInputChange, title, notes = "", defaultValue = "" } = props;

  const handleOnChange = (event: any) => {
    onInputChange(event.target.value);
  }
  return (
    <TextField
      id="full-width"
      label={title}
      InputLabelProps={{
        shrink: true,
      }}
      placeholder=""
      helperText={notes}
      fullWidth
      margin="normal"
      defaultValue={defaultValue}
      onChange={handleOnChange}
    />
  );
}

export default HomeInput;
