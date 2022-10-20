import React from "react";
import Firstform from "./firstform";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
import CompletedForm from "./completedForm";

const getCurrentForm = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <Firstform />;
    case 1:
      return <SecondForm />;
    case 2:
      return <ThirdForm />;
    case 3:
      return <CompletedForm />;
    default:
      return <p>error</p>;
  }
};

// const completedForm = () => {
//   return (
//     <div>
//       <p>Congratulation, Eren</p>
//       <p>You have completed onboarding, you can start using Eden!</p>
//     </div>
//   );
// };

export default getCurrentForm;
