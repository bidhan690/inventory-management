import React from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const SiteLogo: React.FC<SiteLogoProps> = ({
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <Icons.logo className={cn("w-8 h-8", iconClassName)} />
      <span className={cn("text-xl text-site font-semibold ", textClassName)}>
        {siteConfig.name}
      </span>
    </div>
  );
};

export default SiteLogo;
