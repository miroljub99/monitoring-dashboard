import { useEffect, useRef,useLayoutEffect } from "react";
import { useServicesStore } from "@/stores";
import { ServiceCard } from "@/components";
import { mapToCardProps } from "@/utils/mappers";
import { ServiceListWrapper } from "./ServiceList.styled.tsx";


export default function ServiceList(){
    //Use explicit value for better rendering performance
    const services = useServicesStore(state => state.services);
    const loading = useServicesStore(state => state.loading);
    const error = useServicesStore(state => state.error);
    const fetchAndSetServices = useServicesStore(state => state.fetchAndSetServices);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    //Ref for scroll element and position
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useRef<number>(0);

 
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

    //Restore scroll position after update
    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        el.scrollTop = scrollPosition.current;
    }, [services]);

    // Listen to scroll events and store the current scroll position,
    // so it can be restored after re-render or component remount.
    useEffect(() => {
        const node = scrollRef.current;
        if (!node) return;

        const handler = () => {
            scrollPosition.current = node.scrollTop;
        };

        node.addEventListener("scroll", handler);

        return () => {
            node.removeEventListener("scroll", handler);
        };
    }, [scrollRef.current]);

    if(!services.length && loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    if(!services.length) return <p>No services available</p>

    return(<>
        <ServiceListWrapper ref={scrollRef}>
            {services.map(service => (
                <ServiceCard key={service.id} {...mapToCardProps(service)} />
            ))}
        </ServiceListWrapper>
    </>);
}