import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { SignUp } from "@clerk/nextjs";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <section id="login-section">
      <div className="h-screen w-full flex items-center justify-evenly flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-4 items-center">
          <Icons.logo className="w-32 h-32" />
          <span className="text-site text-2xl md:text-4xl font-semibold">
            {siteConfig.name}
          </span>
        </div>
        <SignUp />
      </div>
    </section>
  );
};

export default page;
