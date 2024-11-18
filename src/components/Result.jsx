import investment, { formatter } from "../util/investment.js";

export default function Result({ userInput }) {
  const resultData = investment(userInput);
  console.log("resultData", resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment </th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Capital Investment</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.totalInvestmentAtYearEnd)}</td>
              <td>{formatter.format(result.yearInterest)}</td>
              <td>{formatter.format(result.totalInterest)}</td>
              <td>{formatter.format(result.capitalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
