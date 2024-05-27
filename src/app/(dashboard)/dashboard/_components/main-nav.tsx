import { Icons } from "@/components/icons";
import SearchBar from "@/components/search-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@clerk/nextjs/server";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { dashNavItems } from "@/config/site";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Notification from "./notification";

interface MainNavProps {
  className?: string;
  user?: User | null;
}

const MainNav: React.FC<MainNavProps> = ({ className, user }) => {
  return (
    <div
      className={cn(
        "h-full md:h-[100px] sticky top-0 bg-white z-10 px-4 py-4 lg:py-0 flex justify-between gap-4 items-center ml-0",
        className
      )}
    >
      <SearchBar />
      <div className="flex gap-4 md:gap-6 items-center">
        <Notification count={4} />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                {user?.firstName?.at(0)} {user?.lastName?.at(0)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.emailAddresses[0]?.emailAddress}
                </p>
              </div>
            </DropdownMenuLabel>
            <Separator />
            {dashNavItems.map((item) => {
              const Icon = item.icon
                ? // @ts-expect-error icon is yet to be defined
                  Icons[item.icon.toLowerCase()]
                : Icons.chevronLeft;
              return (
                <DropdownMenuItem asChild key={item.title}>
                  <Link href={item.href ?? ""}>
                    <Icon
                      className="mr-2 h-4 w-4 stroke-zinc-600 "
                      aria-hidden="true"
                    />
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <Separator />
            <DropdownMenuItem>
              <Icons.logout
                className="mr-2 h-4 w-4 stroke-zinc-600 "
                aria-hidden="true"
              />
              <SignOutButton>Log out</SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MainNav;
