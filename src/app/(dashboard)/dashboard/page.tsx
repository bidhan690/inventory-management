import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard - Pharma Vault",
  description: "",
};

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return <div className="w-full h-full bg-site-border p-4">dashboard</div>;
};

export default page;
