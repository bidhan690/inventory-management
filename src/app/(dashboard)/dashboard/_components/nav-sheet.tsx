"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SiteLogo from "@/components/site-logo";
import { dashNavItems } from "@/config/site";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavSheetProps {
  children?: React.ReactNode;
}

const NavSheet: React.FC<NavSheetProps> = ({ children }) => {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  return (
    <>
      <div className="sticky top-0 bg-white flex justify-between items-center p-2 lg:p-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className=" hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Icons.menu className="w-8 h-8" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className=" p-5 bg-white flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <SheetClose asChild>
                <SiteLogo />
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-site-border p-2 rounded-xl"
                >
                  <Icons.close className="text-site w-8 h-8" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </SheetClose>
            </div>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] ">
              <div className="flex flex-col gap-8 ">
                {dashNavItems.map((data, index) => {
                  if (pathname === data.href) {
                    return (
                      <NavItem
                        key={data.href}
                        title={data.title}
                        href={data.href}
                        icon={data.icon}
                        isSelected={true}
                      />
                    );
                  }
                  return (
                    <NavItem
                      key={data.href}
                      title={data.title}
                      href={data.href}
                      icon={data.icon}
                      isSelected={false}
                    />
                  );
                })}
                <NavItem
                  title="Settings"
                  href="/dashboard/settings"
                  icon="settings"
                  isSelected={pathname === "/dashboard/settings"}
                />
                <SignOutButton>
                  <Button
                    variant="ghost"
                    className="flex gap-3 justify-start p-2 hover:bg-white stroke-zinc-600  text-zinc-600 text-base font-medium "
                  >
                    <Icons.logout className="w-6 h-6" />
                    Log Out
                  </Button>
                </SignOutButton>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {children}
      </div>
      {/* For large devices */}

      <div className="sticky top-0 w-72 h-[calc(100vh-1px)] gap-8 px-6 pt-6 pb-8 bg-white border-r border-gray-100 flex-col items-start hidden lg:flex ">
        <div className="h-full gap-8  flex-col items-start flex ">
          <Link href="/dashboard">
            <SiteLogo />
          </Link>
          <ScrollArea className="h-full py-2.5 pr-6">
            <div className="h-full flex flex-col justify-between ">
              <div className="flex flex-col gap-4">
                {dashNavItems.map((data, index) => {
                  if (pathname === data.href) {
                    return (
                      <NavItem
                        key={data.href}
                        title={data.title}
                        href={data.href}
                        icon={data.icon}
                        isSelected={true}
                      />
                    );
                  }
                  return (
                    <NavItem
                      key={data.href}
                      title={data.title}
                      href={data.href}
                      icon={data.icon}
                      isSelected={false}
                    />
                  );
                })}
              </div>
            </div>
          </ScrollArea>
          <div className="flex flex-col gap-6">
            <NavItem
              title="Settings"
              href="/dashboard/settings"
              icon="settings"
              isSelected={pathname === "/dashboard/settings"}
            />
            <SignOutButton>
              <Button
                variant="ghost"
                className="flex gap-3 p-2 justify-start  stroke-zinc-600  text-zinc-600 text-base font-normal hover:bg-site-border rounded-xl"
              >
                <Icons.logout className="w-6 h-6 stroke-zinc-600 " />
                Log Out
              </Button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSheet;

interface NavItemProps {
  title: string;
  href: string;
  icon: string;
  isSelected: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  title,
  href,
  icon,
  isSelected,
}) => {
  const Icon = icon
    ? // @ts-expect-error icon is yet to be defined
      Icons[icon]
    : Icons.chevronLeft;
  return (
    <Link href={href}>
      <div
        className={cn(
          "w-60 p-2 flex gap-3 items-center group hover:bg-site-border rounded-lg",
          {}
        )}
      >
        <Icon
          className={cn("w-6 h-6 stroke-zinc-600 text-zinc-600", {
            "stroke-site ": isSelected,
          })}
        />
        <span
          className={cn("text-zinc-600 text-base font-normal  ", {
            "text-site": isSelected,
          })}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};
