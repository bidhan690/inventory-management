import React from "react";
import OverviewItem from "./overview-item";

interface PurchaseOverviewProps {}

const PurchaseOverview: React.FC<PurchaseOverviewProps> = ({}) => {
  return (
    <div className="col-span-0 md:col-span-3 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
      <span className="text-zinc-700 text-base font-medium font-inter leading-loose">
        Purchase Overview
      </span>
      <div className="w-full grid grid-cols-2 md:flex gap-4">
        <OverviewItem icon="purchase" value="800" label="Purchase" />
        <OverviewItem
          icon="cost"
          value="18,300"
          label="Cost"
          showCurrency
          separatorClassName="hidden md:flex"
        />
        <OverviewItem icon="cancel" value="868" label="Cancel" />
        <OverviewItem
          icon="profit"
          value="17,320"
          label="Return"
          showCurrency
          separator={false}
        />
      </div>
    </div>
  );
};

export default PurchaseOverview;
