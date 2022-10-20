import logo from "./logo.png";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import { Step, StepLabel } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import getCurrentForm from "./getCurrentForm";

function OnboardingForm() {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent(current + 1);
  };

  const handleLaunchClick = () => {
    setCurrent(0);
  };
  return (
    <div>
      <img src={logo} alt="eden-logo" />
      <div className="onboarding-stage">
        <Stepper
          activeStep={current}
          connector={<ColorlibConnector />}
          style={{ width: "30%" }}
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        <div className="form">{getCurrentForm(current)}</div>

        {current !== 3 ? (
          <button className="btn" onClick={handleClick}>
            Create Workspace
          </button>
        ) : (
          <button className="btn" onClick={handleLaunchClick}>
            Launch Eden
          </button>
        )}
      </div>
    </div>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: " #664de5",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: " #664de5",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 3,
  },
}));

export default OnboardingForm;
