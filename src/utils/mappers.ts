import type { Service } from "@/types";
import type { ServiceCardProps } from "@/components/ServiceCard/ServiceCard";

/**
 * Maps a full `Service` object to only the props required by the `ServiceCard` component.
 * This keeps the component clean and only gives it what it needs for display.
 *
 * Useful when rendering a list of services and you want to avoid passing unnecessary data.
 *
 * @param service - The full service object
 * @returns A minimal set of props needed for the ServiceCard
 */
export function mapToCardProps(service: Service):ServiceCardProps{
     const {
    id, name, status, responseTime, cpu, memory, load, uptime, errors, countryCode
  } = service;

   return {
    id, name, status, responseTime, cpu, memory, load, uptime, errors, countryCode
  };

}