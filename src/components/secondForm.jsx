import { FormControl, InputLabel } from "@mui/material";
import BootstrapInput from "./BootstrapInput";

const secondForm = () => {
  return (
    <div>
      <h2>Let's set up a home for all your work</h2>
      <p>You can always create another workspace later.</p>

      <FormControl variant="standard">
        <InputLabel shrink htmlFor="workspace-name">
          Workspace Name
        </InputLabel>
        <BootstrapInput placeholder="Eden" id="workspace-name" />
      </FormControl>
      <br />
      <br />
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="workspace-url">
          Workspace URL(optional)
        </InputLabel>
        <BootstrapInput placeholder="Example" id="workspace-url" />
      </FormControl>
    </div>
  );
};

export default secondForm;
