const button = document.getElementById("button");

button.addEventListener("click", calculateTax);

function calculateTax() {
  const annualIncome = parseFloat(document.getElementById("annual-Income").value) || 0;
  const extraIncome = parseFloat(document.getElementById("extra-Income").value) || 0;
  const ageGroup = document.getElementById("age-Group").value;
  const deductionAmount = parseFloat(document.getElementById("deduction-Amount").value) || 0;

  let totalIncome = annualIncome + extraIncome-deductionAmount;
  let taxAmount = 0;

  if (totalIncome <= 800000) {
    taxAmount = 0;
  } else if (ageGroup === "below-40" && totalIncome > 800000) {
    let taxPayableAmt = totalIncome - 800000;
    taxAmount = taxPayableAmt * 0.3;
  } else if (ageGroup === "40-to-60" && totalIncome > 800000) {
    let taxPayableAmt = totalIncome - 800000;
    taxAmount = taxPayableAmt * 0.4;
  } else if (ageGroup === "above-60" && totalIncome > 800000) {
    let taxPayableAmt = totalIncome - 800000;
    taxAmount = taxPayableAmt * 0.1;
  }

  let overallIncome = totalIncome - taxAmount;
  document.getElementById("overAll-Income").textContent = "Rs. " + overallIncome.toFixed(2);
}
