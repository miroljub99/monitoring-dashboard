import type { Service } from "./serviceTypes";

/**
 * Zustand state structure for managing services in the monitoring dashboard.
 */
export interface ServicesState {

    services: Service[];                       // List of all monitored services
    loading: boolean;                         // Indicates if services are being fetched
    error: string | null;                     // Latest error message or null if no error

    setServices: (newServices: Service[]) => void;   // Replace current services list
    setLoading: (loading: boolean) => void;         // Update loading state
    setError: (err: string | null) => void;         // Update error message or clear it
    fetchAndSetServices: () => Promise<void>;       // Fetch services from API and update store
}