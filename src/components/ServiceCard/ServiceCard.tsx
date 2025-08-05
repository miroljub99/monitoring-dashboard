import type { Service } from "../../types"
import { ReactNode } from "react";
import {Metric,StatusBadge} from "../index";
import { CardWrapper,HeaderSection,MetricSection,TechnicalSection } from "./ServiceCard.styled";
import { Heading3,Caption,Button } from "../index";
import { useNavigate } from "react-router-dom";
import { Cpu, MemoryStick, Timer, Activity, BarChart,AlertCircle} from "lucide-react";

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

/**
 * Renders a service summary card with status, metrics, and country code.
 */
export default function ServiceCard(props:ServiceCardProps){

    const {id,name,status,responseTime,cpu,memory,load,uptime,errors,countryCode} = props;
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/service/${id}`);
        console.log("kliknuo si na id ",id);
    }

    return(<>
            <CardWrapper key={id} data-testid="service-card">
                {/* Head section */}
                <HeaderSection>
                    <Heading3>{name}</Heading3>
                    <StatusBadge status={status}/>
                    <Caption>{` `+countryCode}</Caption>
                </HeaderSection>
                {/* Metric section*/}
                <MetricSection>
                    <Metric icon={Cpu} value={cpu} unit="%"/>
                    <Metric icon={MemoryStick} value={memory} unit="Mb"/>
                    <Metric icon={Timer} value={responseTime} unit="ms"/>
                </MetricSection>
                {/* Technical section */}
                <TechnicalSection>
                    <Metric icon={Activity} value={uptime} unit="%"/>
                    <Metric icon={BarChart} value={load} unit=""/>
                    <Metric icon={AlertCircle} value={errors} unit=" err"/>
                </TechnicalSection>
                <Button size="md"  onClick={handleClick}>Detail</Button>
            </CardWrapper>
    </>);
}