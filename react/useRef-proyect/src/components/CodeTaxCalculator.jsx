import { useRef } from "react";

function CodeTaxCalculator () {
    const grossIncomeRef = useRef(null);
  const taxPercentRef = useRef(null);

  const getNetIncome = () => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber;
    const taxPercent = taxPercentRef.current?.valueAsNumber;

    const total = grossIncome - grossIncome * (taxPercent / 100);
    console.log("The net total is:", total);
}
    return (
        <div>hola</div>
    )
  
}

export default CodeTaxCalculator