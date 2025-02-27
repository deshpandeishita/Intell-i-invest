import * as React from "react";

interface CompanyTableRowProps {
  serialNumber: string;
  companyName: string;
  successRate: string;
  riskLevel: string;
  riskColor: string;
}

export const CompanyTableRow: React.FC<CompanyTableRowProps> = ({
  serialNumber,
  companyName,
  successRate,
  riskLevel,
  riskColor,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between w-full text-center whitespace-nowrap max-w-[1117px] max-md:max-w-full">
        <p className="text-2xl text-gray-800">{serialNumber}</p>
        <p className="text-2xl text-gray-800">{companyName}</p>
        <div className="flex gap-10">
          <p className="text-2xl text-gray-800">{successRate}</p>
          <p className={`text-3xl ${riskColor}`}>{riskLevel}</p>
        </div>
      </div>
      <div className="shrink-0 mt-9 max-w-full h-px border border-black border-solid w-[1312px] max-md:mt-10" />
    </>
  );
};
