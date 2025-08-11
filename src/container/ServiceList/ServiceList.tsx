import { useEffect, useRef} from "react";
import { useServicesStore } from "@/stores";
import { ServiceCard,Loading,Error,Info } from "@/components";
import { mapToCardProps } from "@/utils/mappers";
import { ServiceListWrapper } from "./ServiceList.styled.tsx";
import { useLocation } from "react-router-dom";


export default function ServiceList(){
    //Use explicit value for better rendering performance
    const services = useServicesStore(state => state.services);
    const query = useServicesStore(state => state.query);
    const setQuery = useServicesStore(state => state.setQuery);
    const loading = useServicesStore(state => state.loading);
    const error = useServicesStore(state => state.error);
    const filtered = services.filter(s => 
                        s.name.toLowerCase().includes(query.toLowerCase()));
    const location = useLocation();                    
    //Ref for scroll element and position
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useRef<number>(0);

    useEffect(()=>{
        return () =>{
            setQuery('');
        }
    },[location.pathname]);

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
    }, []);

    if(!services.length && loading) return <Loading label="Loading..."/>;
    if(error) return <Error label={error} />;
    if(!services.length) return <Error label='No services available' />;

    return(<>
        <ServiceListWrapper ref={scrollRef}>
            {query === '' 
                ? services.map(service => (
                    <ServiceCard key={service.id} {...mapToCardProps(service)} />))
                : filtered.length > 0 
                    ? filtered.map(service => (
                    <ServiceCard key={service.id} {...mapToCardProps(service)} />))
                    : <Info label="No Result" isIcon={true}/>
            }
        </ServiceListWrapper>
    </>);
}