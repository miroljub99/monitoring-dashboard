import styled from "@emotion/styled";
import {MetricDonutChart} from '@/Charts';

interface ServiceMetricsProps{
    cpu: number;
    memory: number;
    responseTime: number;
}

export default function ServiceMetrics(props:ServiceMetricsProps){

    const {cpu,memory,responseTime} = props;

    return(<>
        <MainWrapper>
            <MetricDonutChart label='CPU' value={cpu} maxValue={100} unit='%'/>
            <MetricDonutChart label='Memory' value={memory} maxValue={1024} unit=' MB'/>
            <MetricDonutChart label='Resp.Time' value={responseTime} maxValue={1000} unit=" ms" />
        </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    gap:spacing(8),
    padding:`${spacing(4)} ${spacing(12)}`,
    background:colors.surface,
    borderRadius:borderRadius.lg,
}));