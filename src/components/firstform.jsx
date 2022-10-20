import { FormControl, InputLabel } from "@mui/material";
import BootstrapInput from "./BootstrapInput";

const firstform = () => {
  return (
    <div>
      <h2>Welcome! First thing first...</h2>
      <p>You can always change them later.</p>

      <FormControl variant="standard">
        <InputLabel shrink htmlFor="full-name">
          Full Name
        </InputLabel>
        <BootstrapInput placeholder="Steve Jobs" id="full-name" />
      </FormControl>
      <br />
      <br />
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="display-name">
          Display Name
        </InputLabel>
        <BootstrapInput placeholder="Steve" id="display-name" />
      </FormControl>
    </div>
  );
};

export default firstform;
