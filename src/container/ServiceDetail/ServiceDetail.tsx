import { useParams } from "react-router-dom";
import { useServicesStore } from "@/stores";
import { ServiceOverview,ServiceMetrics,ServiceStats,ServiceEvents, ServiceSecurity,ServiceResponsiveTime } from "@/components";
import styled from "@emotion/styled";

export default function ServiceDetail(){
    const {id} = useParams<string>();
    const service = useServicesStore(state => state.services.find(s => s.id === Number(id)));

    if (!service) {
        return <p>Loading service details...</p>;
    }
    return(<>
        <ServiceDetailWrapper>
            <ServiceOverview name={service.name} status={service.status} version={service.version} countryCode={service.countryCode}/>
            <BoxWrapper>
                <ServiceMetrics cpu={service.cpu} memory={service.memory} responseTime={service.responseTime} />
                <ServiceStats uptime={service.uptime} load={service.load} errors={service.errors}/>
            </BoxWrapper>
            
            <BoxWrapper>
                <ServiceEvents events={service.events} rowLimit={6}/>
                <ServiceSecurity incidents={service.security.incidents} firewall={service.security.firewall} vulnerabilityScan={service.security.vulnerabilityScan}/>
                <ServiceResponsiveTime data={service.responseTimeHistory} />
            </BoxWrapper>
        </ServiceDetailWrapper>
    </>);
}

const ServiceDetailWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(6),
}));

const BoxWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    minHeight:0,
    gap:spacing(6),
}));