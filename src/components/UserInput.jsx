export default function UserInput({ onInputChange, userInput }) {
  return (
    <ol id="user-input">
      <li>
        <label>INITIAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          required
          onChange={(event) =>
            onInputChange("initialInvestment", event.target.value)
          }
        ></input>
      </li>
      <li>
        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          required
          onChange={(event) =>
            onInputChange("annualInvestment", event.target.value)
          }
        ></input>
      </li>
      <li>
        <label>EXPECTED RETURN (IN %)</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          required
          onChange={(event) =>
            onInputChange("expectedReturn", event.target.value)
          }
        ></input>
      </li>
      <li>
        <label>DURATION (IN MONTHS)</label>
        <input
          type="number"
          value={userInput.duration}
          required
          onChange={(event) => onInputChange("duration", event.target.value)}
        ></input>
      </li>
    </ol>
  );
}
