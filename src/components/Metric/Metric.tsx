import { Paragraph } from "../UI/Typography";
/**
 * Props for the Metric component.
 * Used to display a single labeled metric (e.g., CPU: 45%).
 */
interface MetricProps {
    label: string;
    value: number | string;
}

/**
 * Displays a simple metric with label and value.
 * Example: "CPU: 45%"
 */
export default function Metric ({label,value}: MetricProps){
    
    return(<>
        <Paragraph>{label+`: `+value}</Paragraph>
    </>);
}