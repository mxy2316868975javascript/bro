import { CitiesMap } from "./constant";

export const calculateDetails = (values: any, isNewTaxLaw: boolean) => {
  const params = CitiesMap['Shanghai'] as any;
  // const params = CitiesMap[values.city] as any;
  const personalInsurance = values.salary * params.pension;
  const personalMedical = values.salary * params.medical;
  const personalUnemployment = values.salary * params.unemployment;
  const personalHousingFund = values.salary * params.housingFund;
  const personalSupplementaryFund = values.salary * params.supplementaryFund;
  const personalTotal =
    personalInsurance +
    personalMedical +
    personalUnemployment +
    personalHousingFund +
    personalSupplementaryFund;

  const companyInsurance = values.salary * params.pension;
  const companyMedical = values.salary * params.medical;
  const companyUnemployment = values.salary * params.unemployment;
  const companyHousingFund = values.salary * params.housingFund;
  const companySupplementaryFund = values.salary * params.supplementaryFund;
  const companyTotal =
    companyInsurance +
    companyMedical +
    companyUnemployment +
    companyHousingFund +
    companySupplementaryFund;

  const taxableSalary = values.salary - personalTotal;
  const tax = calculateTax(taxableSalary, isNewTaxLaw);
  const afterTaxSalary = taxableSalary - tax;

  return {
    personalTotal,
    companyTotal,
    tax,
    afterTaxSalary,
    personalInsurance,
    personalMedical,
    personalUnemployment,
    personalHousingFund,
    personalSupplementaryFund,
    companyInsurance,
    companyMedical,
    companyUnemployment,
    companyHousingFund,
    companySupplementaryFund,
  };
};

export const calculateTax = (salary: any, isNewTaxLaw: any) => {
  // Simplified tax calculation for demonstration purposes
  if (isNewTaxLaw) {
    if (salary <= 5000) return 0;
    return (salary - 5000) * 0.03;
  } else {
    if (salary <= 3500) return 0;
    return (salary - 3500) * 0.1;
  }
};
