import React from "react";
import MainNav from "./_components/main-nav";
import NavSheet from "./_components/nav-sheet";
import { currentUser } from "@clerk/nextjs/server";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = async ({ children }) => {
  const user = await currentUser();
  return (
    <div className="flex flex-col lg:flex-row">
      <NavSheet>
        <MainNav className="lg:hidden" user={user} />
      </NavSheet>
      <div className="w-full flex flex-col">
        <MainNav className="hidden lg:flex" user={user} />
        {children}
      </div>
    </div>
  );
};

export default layout;
