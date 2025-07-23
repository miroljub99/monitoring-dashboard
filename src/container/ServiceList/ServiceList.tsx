import { useEffect, useRef} from "react";
import { useServicesStore } from "@/stores";
import { ServiceCard } from "@/components";
import { mapToCardProps } from "@/utils/mappers";
import { ServiceListWrapper } from "./ServiceList.styled.tsx";


export default function ServiceList(){
    //Use explicit value for better rendering performance
    const services = useServicesStore(state => state.services);
    const loading = useServicesStore(state => state.loading);
    const error = useServicesStore(state => state.error);
    //Ref for scroll element and position
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useRef<number>(0);

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