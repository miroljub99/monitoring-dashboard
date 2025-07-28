import type { Service } from "./serviceTypes";

/**
 * Zustand state structure for managing services in the monitoring dashboard.
 */
export interface ServicesState {

    services: Service[];                      //List of all monitored services
    loading: boolean;                         //Indicates if services are being fetched
    error: string | null;                     //Latest error message or null if no error
    isPolling: boolean;                       //Indicates is polling
    retryCount: number;                       //Count retry
    lastFetched: number | null;               //Fetched time
    isOffline: boolean;                       //Offline status
    query: string;                            //Query state

    setServices: (newServices: Service[]) => void;   // Replace current services list
    setLoading: (loading: boolean) => void;         // Update loading state
    setError: (err: string | null) => void;         // Update error message or clear it
    setIsPolling: (isPolling: boolean) => void;
    setRetryCount:(retryCount: number) => void;
    setLastFetched:(timestamp: number) => void;
    setIsOffline: (isOffline: boolean) => void;
    setQuery: (query: string) => void;
    resetStore: ()=> void;
    getServiceById:(id: string)=>Service | undefined;            // Get service by id itself
    fetchAndSetServices: ()=> Promise<void>;       // Fetch services from API and update store
    startPolling: ()=> void;                       // Start polling and set interval in intervalId
    stopPolling: ()=> void;                        // Stop interval and clear intervalId
    getPollingStatus: ()=>{                        // Returns current polling state for UI or debug
        polling: boolean;
        error: string | null;
        retryCount: number;
        lastFetched: number | null;
        isOffline: boolean;
    }
}