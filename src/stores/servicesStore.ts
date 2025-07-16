import {create} from 'zustand';
import type {ServicesState} from '../types';
import { fetchServices } from '../api';

/**
 * Zustand store for managing service list, loading state, and error handling.
 */
export const useServicesStore = create<ServicesState>((set,get)=>({
    services: [],       //List of monitored services
    loading: false,     //Indicates loading status
    error: null,        //Error message or null if no error

    setServices:(newServices)=>{set({services:newServices});},   //Update services
    setLoading:(loading)=>{set({loading})},                      //Update loading
    setError:(error)=>{set({error})},                            //Update error
    getServiceById:(id)=>{
        const {services} = get();
        return services.find(service => service.id === id);      //Get service by id
    },
    fetchAndSetServices: async ()=>{
        const {setServices,setLoading,setError} = get();

        setLoading(true);
        setError(null);

        try {
            const data = await fetchServices();
            setServices(data || []);    
        } catch (error) {
            setError('Failed to fetch services');
        } finally {
            setLoading(false);
        }
    },
}));