import { Paragraph } from "../UI/Typography";
import type { LucideIcon } from "lucide-react";
import styled from "@emotion/styled";
/**
 * Props for the Metric component.
 * Used to display a single labeled metric (e.g., CPU: 45%).
 */
interface MetricProps {
    label?: string;
    value: number | string;
    icon?: LucideIcon;
    unit?: string;
}

/**
 * Displays a simple metric with label and value.
 * Example: "CPU: 45%"
 */
export default function Metric ({label='',value,icon,unit=''}: MetricProps){
    const Icon = icon;
    return(<>
     <MetricWrapper>
        {Icon && <Icon size={26}/>}<Paragraph>{label+` `+value+``+unit }</Paragraph>
     </MetricWrapper>
    </>);
}

const MetricWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(3),
}));