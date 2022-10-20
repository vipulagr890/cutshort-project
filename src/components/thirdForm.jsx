import { Button, FormControl } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

const thirdform = () => {
  const handleClick = () => {
    //TODO
    return "";
  };
  return (
    <div>
      <h2>How are you planning to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly.</p>
      <div>
        <FormControl variant="standard" style={{ marginRight: "1rem" }}>
          <Button
            variant="outlined"
            onClick={handleClick}
            style={{ height: "10rem", width: "10rem" }}
          >
            <div
              style={{ fontSize: "0.7rem", textAlign: "left", color: "black" }}
            >
              <PersonIcon />
              <p>For Myself</p>
              Write better.Think more clearly. Stay organized
            </div>
          </Button>
        </FormControl>
        <FormControl variant="standard">
          <Button
            variant="outlined"
            id="workspace-url"
            onClick={handleClick}
            style={{ height: "10rem", width: "10rem" }}
          >
            <div
              style={{ fontSize: "0.7rem", textAlign: "left", color: "black" }}
            >
              <GroupsIcon />
              <p>With my team</p>
              Wikis, docs, tasks & projects, all in one place.
            </div>
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default thirdform;
