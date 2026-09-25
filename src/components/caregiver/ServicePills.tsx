import { Badge } from "@/components/ui/Badge";
import { serviceMap } from "@/data/services";
import type { ServiceId } from "@/types";

interface ServicePillsProps {
  services: ServiceId[];
  size?: "sm" | "md";
}

export function ServicePills({ services, size = "sm" }: ServicePillsProps) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {services.map((id) => {
        const service = serviceMap[id];
        if (!service) return null;
        return (
          <li key={id}>
            <Badge tone="mint" size={size} icon={service.icon}>
              {service.shortName}
            </Badge>
          </li>
        );
      })}
    </ul>
  );
}
