import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const isValidInput =
    userInput.duration > 0 &&
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.expectedReturn > 0;

  function handleInputChange(inputTitle, inputValue) {
    setUserInput((previousUserInput) => {
      return { ...previousUserInput, [inputTitle]: inputValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {isValidInput ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please enter the valid input</p>
      )}
    </>
  );
}
