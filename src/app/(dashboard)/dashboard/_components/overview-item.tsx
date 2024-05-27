import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface OverviewItemProps {
  icon: string;
  value: string;
  label: string;
  flexClassName?: string;
  className?: string;
  iconClassName?: string;
  separator?: boolean;
  separatorClassName?: string;
  showCurrency?: boolean;
}

const OverviewItem: React.FC<OverviewItemProps> = ({
  icon,
  value,
  label,
  className,
  flexClassName,
  iconClassName,
  separator = true,
  separatorClassName,
  showCurrency,
}) => {
  const Icon = icon
    ? // @ts-expect-error icon is yet to be defined
      Icons[icon]
    : Icons.chevronLeft;
  return (
    <div className="w-full flex gap-2">
      <div
        className={cn("w-full flex flex-col items-center gap-2 ", className)}
      >
        <Icon
          className={cn("w-6 h-6 md:w-8 md:h-8 text-zinc-700", iconClassName)}
        />
        <div
          className={cn(
            "w-full flex flex-col justify-around items-center ",
            flexClassName
          )}
        >
          <h2 className="text-wrap text-gray-500 text-sm font-semibold font-inter ">
            {showCurrency ? "रु" : null} {value}
          </h2>
          <h2 className="text-gray-500 text-sm font-medium font-inter leading-tight">
            {label}
          </h2>
        </div>
      </div>
      {separator ? (
        <Separator
          orientation="vertical"
          className={cn("h-full", separatorClassName)}
        />
      ) : null}
    </div>
  );
};

export default OverviewItem;
