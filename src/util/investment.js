export default function investment(input) {
  console.log("input", input);
  let investment = Number(input.initialInvestment);
  const annualData = [];
  let totalInterest = 0,
    capitalInvestment = investment;
  for (let i = 1; i <= input.duration; i++) {
    const interestOnInvestment = (investment * input.expectedReturn) / 100;
    totalInterest += interestOnInvestment;
    console.log("interest", interestOnInvestment);
    investment += Number(interestOnInvestment) + Number(input.annualInvestment);
    console.log("investment", investment);
    capitalInvestment += Number(input.annualInvestment);
    annualData.push({
      year: i,
      yearInterest: interestOnInvestment,
      totalInterest: totalInterest,
      totalInvestmentAtYearEnd: investment,
      capitalInvestment: capitalInvestment,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
