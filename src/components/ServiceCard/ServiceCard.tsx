import type { Service } from "../../types"
import { ReactNode } from "react";
import {Metric,StatusBadge} from "../index";
import { CardWrapper,HeaderSection,MetricSection,TechnicalSection } from "./ServiceCard.styled";


/**
 * Props for the ServiceCard component
 * Displays a summary of a service in the UI
 */
export interface ServiceCardProps{

    id:Service['id'];
    name: Service['name'];
    status: Service['status'];
    responseTime: Service['responseTime'];
    cpu: Service['cpu'];
    memory: Service['memory'];
    load: Service['load'];
    uptime: Service['uptime'];
    errors: Service['errors'];
    countryCode: Service['countryCode'];
    onClick?: () => void;
    children?: ReactNode;

};

export default function ServiceCard(props:ServiceCardProps){

    const {id,name,status,responseTime,cpu,memory,load,uptime,errors,countryCode,onClick} = props;

    return(<>
            <CardWrapper key={id} data-testid="service-card" onClick={onClick}>
                {/* Head section */}
                <HeaderSection>
                    <h3>{name}</h3>
                    <StatusBadge status={status}/>
                    <small>{` `+countryCode}</small>
                </HeaderSection>
                {/* Metric section*/}
                <MetricSection>
                    <Metric label={'CPU'} value={cpu}/>
                    <Metric label={'Memory'} value={memory}/>
                    <Metric label={'Load'} value={load}/>
                </MetricSection>
                {/* Technical section */}
                <TechnicalSection>
                    <Metric label={'Up Time'} value={uptime}/>
                    <Metric label={'Resp. time'} value={responseTime}/>
                    <Metric label={'Errors'} value={errors}/>
                </TechnicalSection>
            </CardWrapper>
    </>);
}