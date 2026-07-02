import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  iconClassName?: string;
  children: React.ReactNode;
}

const SectionBadge = ({ icon: Icon, iconClassName = "text-volt-dark", children }: SectionBadgeProps) => (
  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white card-soft px-3.5 py-1.5 text-xs font-medium text-neutral-600">
    <Icon className={`w-3.5 h-3.5 ${iconClassName}`} /> {children}
  </span>
);

export default SectionBadge;
