import { useEffect, useRef } from "react";
import { useServicesStore } from "@/stores";
import { ServiceCard } from "@/components";
import { mapToCardProps } from "@/utils/mappers";


export default function ServiceList(){
    //Use explicit value for better rendering performance
    const services = useServicesStore(state => state.services);
    const loading = useServicesStore(state => state.loading);
    const error = useServicesStore(state => state.error);
    const fetchAndSetServices = useServicesStore(state => state.fetchAndSetServices);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    //Fetching the services and put to store
    useEffect(()=>{
        fetchAndSetServices();
    },[fetchAndSetServices]);

    //useEffect for pollling when is tab active
    useEffect(()=>{

        function handlePolling(){
            const isActiveTab = document.visibilityState === 'visible';

            if(isActiveTab){
                if(!intervalRef.current){
                    fetchAndSetServices();
                    intervalRef.current = setInterval(()=>{
                        fetchAndSetServices()
                    },10000);
                }
            }else{
                if(intervalRef.current){
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            };
        }

        document.addEventListener('visibilitychange',handlePolling);

        handlePolling();

        return () => {
          document.removeEventListener("visibilitychange", handlePolling);
          if (intervalRef.current) clearInterval(intervalRef.current);
    };


    },[fetchAndSetServices]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    if(!services.length) return <p>No services available</p>

    return(<>
        <div>
            {services.map(service => (
                <ServiceCard key={service.id} {...mapToCardProps(service)} />
            ))}
        </div>
    </>);
}