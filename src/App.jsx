import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Inputs";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <Input userInputProp={userInput} onChangeInput={handleChange} />
      {inputIsValid ? (
        <Results inputsFromUseState={userInput} />
      ) : (
        <p className="center">Please Enter A Duration Greater Than Zero!</p>
      )}
    </>
  );
}

export default App;
