import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

interface notificationProps {
  count?: number;
}

const Notification: React.FC<notificationProps> = ({ count }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="icon" variant="outline" className="p-1 relative">
          <Badge
            variant="secondary"
            className="absolute -right-2 -top-2 h-6 w-6 justify-center rounded-full p-2.5"
          >
            1
          </Badge>
          <Icons.notification className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="gap-2">
          <Icons.info className="w-4 h-4 text-green-500" />
          Item is restocked successfully.
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Icons.info className="w-4 h-4 text-yellow-500" />
          Item is going to be out stocked.
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Icons.info className="w-4 h-4 text-red-500" />
          Item is out stocked.
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
