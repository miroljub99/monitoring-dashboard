import { useParams,useNavigate } from "react-router-dom";
import { useServicesStore } from "@/stores";
import { ServiceOverview,ServiceMetrics,ServiceStats,ServiceEvents, ServiceSecurity,ServiceResponsiveTime,Error,Button } from "@/components";
import styled from "@emotion/styled";

export default function ServiceDetail(){

    const services = useServicesStore(state => state.services);
    const error = useServicesStore(state => state.error);
    const navigate = useNavigate();
    const {id} = useParams<string>();
    const service = services.find(s => s.id === id);

    if(error) return <Error label={error}/>;
    if(!service) return <Error label="Service not found"/>;
    
    
    return(<>
        <ServiceDetailWrapper>
            <Button onClick={()=> navigate('/dashboard')}>&lt; Back</Button>
            <ServiceOverview name={service.name} status={service.status} version={service.version} countryCode={service.countryCode}/>
            <BoxWrapper>
                <ServiceMetrics cpu={service.cpu} memory={service.memory} responseTime={service.responseTime} />
                <ServiceStats uptime={service.uptime} load={service.load} errors={service.errors}/>
            </BoxWrapper>
            
            <BoxWrapper>
                <ServiceEvents events={service.events} rowLimit={6}/>
                <ServiceResponsiveTime data={service.responseTimeHistory} />
                <ServiceSecurity incidents={service.security.incidents} firewall={service.security.firewall} vulnerabilityScan={service.security.vulnerabilityScan}/>
            </BoxWrapper>
        </ServiceDetailWrapper>
    </>);
}

const ServiceDetailWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(6),
    height:'100%',
    minHeight:0,
    padding:`0 ${spacing(6)}`,
    overflow:'hidden',
    overflowY:'scroll',
    'button':{
        width:'100%',
    }
}));

const BoxWrapper = styled.div(({theme:{spacing,media}})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    minWidth:0,
    gap:spacing(6),
    [media.laptop]:{
        flexWrap:'wrap',
    }
}));