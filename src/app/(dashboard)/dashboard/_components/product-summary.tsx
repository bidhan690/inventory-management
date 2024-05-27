import React from "react";
import OverviewItem from "./overview-item";

interface ProductSummaryProps {}

const ProductSummary: React.FC<ProductSummaryProps> = ({}) => {
  return (
    <div className="col-start-1 col-span-0 md:col-start-4 md:col-span-2 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
      <span className="text-zinc-700 text-base font-medium font-inter leading-loose">
        Product Summary
      </span>
      <div className="flex justify-between">
        <OverviewItem
          flexClassName="flex-col"
          icon="avatar"
          value="82"
          label="Number of Suppliers"
        />

        <OverviewItem
          flexClassName="flex-col"
          icon="todoCheck"
          value="20"
          label="Number of Categories"
          separator={false}
        />
      </div>
    </div>
  );
};

export default ProductSummary;
