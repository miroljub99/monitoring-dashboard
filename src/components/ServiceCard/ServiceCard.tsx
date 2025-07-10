import type { Service } from "../../types"
import { ReactNode } from "react";
import {Metric,StatusBadge} from "../index";


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
        <div key={id} data-testid="service-card" onClick={onClick}>
            {/* Head section */}
            <div>
                <h3>{name}</h3>
                <StatusBadge status={status}/>
                <small>{` `+countryCode}</small>
            </div>
            {/* Metric section*/}
            <div>
                <Metric label={'CPU'} value={cpu}/>
                <Metric label={'Memory'} value={memory}/>
                <Metric label={'Load'} value={load}/>
            </div>
            {/* Technical section */}
            <div>
                <Metric label={'Up Time'} value={uptime}/>
                <Metric label={'Response time'} value={responseTime}/>
                <Metric label={'Errors'} value={errors}/>
            </div>
        </div>
    </>);
}