import { Metadata } from "next";
import React from "react";
import SalesOverview from "./_components/sales-overview";
import InventorySummary from "./_components/inventory-summary";
import PurchaseOverview from "./_components/purchase-overview";
import ProductSummary from "./_components/product-summary";

export const metadata: Metadata = {
  title: "Dashboard - Pharma Vault",
  description: "",
};

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className=" bg-site-border p-4 grid grid-cols-1 md:grid-cols-5   gap-4">
      <SalesOverview />
      <InventorySummary />
      <PurchaseOverview />
      <ProductSummary />
    </div>
  );
};

export default page;
