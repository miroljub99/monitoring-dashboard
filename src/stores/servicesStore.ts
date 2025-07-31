import {create} from 'zustand';
import type {ServicesState} from '../types';
import { fetchServices } from '../api';


let intervalId: NodeJS.Timeout | null = null; //Save current interval Id

/**
 * Zustand store for managing service list, loading state, and error handling.
 */
export const useServicesStore = create<ServicesState>((set,get)=>({
    services: [],       //List of monitored services
    loading: false,     //Indicates loading status
    error: null,        //Error message or null if no error
    isPolling: false,   //Indicates polling status
    retryCount: 0,      //Indicates retry count
    lastFetched: null,  //Indicates fetched time
    isOffline: !navigator.onLine, // Indicates status offline or online
    query:'',


    setServices:(newServices)=>{set({services:newServices});},   //Update services
    setLoading:(loading)=>{set({loading})},                      //Update loading
    setError:(error)=>{set({error})},                            //Update error
    setIsPolling:(isPolling)=>{set({isPolling})},                //Update isPolling
    setRetryCount:(retryCount)=>{set({retryCount})},             //Update retryCount
    setLastFetched:(timestamp)=>{set({lastFetched:timestamp})},  //Update fetch time
    setIsOffline:(isOffline)=>{set({isOffline})},                //Update offline status
    setQuery:(search) =>{set({query:search})},
    getServiceById:(id)=>{
        const {services} = get();
        return services.find(service => service.id === id);      //Get service by id
    },
    fetchAndSetServices: async ()=>{
        const {setServices,setLoading,setError,stopPolling,setRetryCount,setLastFetched} = get();

        setLoading(true);
        setError(null);

        try {
            const data = await fetchServices();
            if(!data) throw new Error("No data received");
            setServices(data);
            setRetryCount(0);
            setLastFetched(Date.now());    
        } catch (error) {
            const newRetry = get().retryCount + 1;
            setError('Failed to fetch services');
            setRetryCount(newRetry);

             if (newRetry >= 3) {
                stopPolling();
                setError('Polling stopped due to repeated failures.');
            }
        } finally {
            setLoading(false);
        }
    },
    startPolling:()=>{
        if(get().isPolling) return;
        get().fetchAndSetServices();
        intervalId = setInterval(get().fetchAndSetServices,10000);
        get().setIsPolling(true);
    },
    stopPolling:()=>{
        if(intervalId) clearInterval(intervalId);
        intervalId = null;
        get().setIsPolling(false);
    },
    getPollingStatus:()=>({
        polling: get().isPolling,
        error: get().error,
        retryCount: get().retryCount,
        lastFetched: get().lastFetched,
        isOffline: get().isOffline,
    }),
    resetStore: ()=>{
        get().stopPolling();
        set({
            services: [],
            loading: false,
            error: null,
            isPolling: false,
            retryCount: 0,
            lastFetched: null,
            isOffline: !navigator.onLine,
        });
    },
}));