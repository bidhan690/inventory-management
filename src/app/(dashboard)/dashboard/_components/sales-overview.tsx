import React from "react";
import OverviewItem from "./overview-item";

interface SalesOverviewProps {}

const SalesOverview: React.FC<SalesOverviewProps> = ({}) => {
  return (
    <div className="col-span-0 md:col-span-3 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
      <span className="text-zinc-700 text-base font-medium font-inter leading-loose">
        Sales Overview
      </span>
      <div className="w-full grid grid-cols-2 md:flex gap-4">
        <OverviewItem icon="sales" value="800" label="Sales" showCurrency />
        <OverviewItem
          icon="revenue"
          value="18,300"
          label="Revenue"
          showCurrency
          separatorClassName="hidden md:flex"
        />
        <OverviewItem icon="profit" value="868" label="Profit" showCurrency />
        <OverviewItem
          icon="cost"
          value="17,320"
          label="Cost"
          showCurrency
          separator={false}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
