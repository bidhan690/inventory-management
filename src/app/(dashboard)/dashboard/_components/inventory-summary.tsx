import React from "react";
import OverviewItem from "./overview-item";

interface InventorySummaryProps {}

const InventorySummary: React.FC<InventorySummaryProps> = ({}) => {
  return (
    <div className="col-start-1 col-span-0 md:col-start-4 md:col-span-2 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
      <span className="text-zinc-700 text-base font-medium font-inter leading-loose">
        Inventory Summary
      </span>
      <div className="flex justify-between">
        <OverviewItem
          flexClassName="flex-col"
          icon="qualityIN"
          value="828"
          label="Quantity in Hand"
        />

        <OverviewItem
          flexClassName="flex-col"
          icon="locationIN"
          value="200"
          label="To be received"
          separator={false}
        />
      </div>
    </div>
  );
};

export default InventorySummary;
