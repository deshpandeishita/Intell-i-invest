import * as React from "react";
import { CompanyTableRow } from "./CompanyTableRow";

const companies = [
  {
    serialNumber: "1.",
    companyName: "ABC",
    successRate: "94%",
    riskLevel: "Medium",
    riskColor: "text-yellow-400",
  },
  {
    serialNumber: "2.",
    companyName: "DEF",
    successRate: "83%",
    riskLevel: "High",
    riskColor: "text-red-600",
  },
  {
    serialNumber: "3.",
    companyName: "XYZ",
    successRate: "72%",
    riskLevel: "Medium",
    riskColor: "text-yellow-400",
  },
  {
    serialNumber: "4.",
    companyName: "LMN",
    successRate: "60%",
    riskLevel: "Low",
    riskColor: "text-green-700",
  },
];

export const CompanyTable: React.FC = () => {
  return (
    <section className="w-full max-w-[1312px]">
      <div className="flex flex-wrap gap-5 justify-between mt-20 w-full text-3xl text-center text-gray-800 max-w-[1169px] max-md:mt-10 max-md:max-w-full">
        <h3>Sr. No</h3>
        <h3>Company Name</h3>
        <div className="flex gap-10 self-start">
          <h3>Success Rate</h3>
          <h3>Risk Factor</h3>
        </div>
      </div>
      <div className="shrink-0 mt-9 max-w-full h-px border border-black border-solid w-[1312px]" />

      {companies.map((company, index) => (
        <CompanyTableRow key={index} {...company} />
      ))}
    </section>
  );
};
