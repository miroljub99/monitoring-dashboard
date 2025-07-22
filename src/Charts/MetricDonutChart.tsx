import { useTheme } from "@emotion/react";
import { Pie,PieChart,Label,Cell,ResponsiveContainer } from "recharts";
import styled from "@emotion/styled";
import {getPercent,getColorFromPercent} from '../utils/ChartUtils'

interface MetricDonutProps{
    label: string;
    value: number;
    maxValue: number;
    threshold?:{
        green: number;
        orange: number;
        red: number;
    };
    unit?: string;
};

let defaultThreshold ={green:40,orange:70,red:100} // Default value for Threshold



export default function MetricDonutChart(props: MetricDonutProps){

    const {label,value,maxValue,unit,threshold} = props;
    const theme = useTheme();
    const percent = getPercent(value,maxValue);
    const color = getColorFromPercent(percent,threshold ?? defaultThreshold,theme);

    return(<>
    <MainWrapper>
        <ResponsiveContainer width={200} height={180} aria-label={``}>
                <PieChart >
                    <Pie data={[{value:1}]}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={'95%'}
                        outerRadius={'99%'}
                        startAngle={220}
                        endAngle={-40}
                        isAnimationActive={false}
                        stroke="none"
                        fill={theme.colors.border}>
                    </Pie>
        
                    <Pie data={[{value:1}]}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={'48%'}
                        outerRadius={'52%'}
                        startAngle={220}
                        endAngle={-40}
                        fill={theme.colors.border}
                        isAnimationActive={false}
                        stroke="none"
                        >
                    </Pie>
                    <Pie data={[{value:1}]}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={'52%'}
                        outerRadius={'95%'}
                        stroke="none"
                        startAngle={220}
                        endAngle={-40}
                        isAnimationActive={false}>
                        <Cell fill={theme.colors.background} stroke={theme.colors.border} strokeWidth={2} ></Cell>
                    </Pie>
                    <Pie data={[{value:percent},{value:100 - percent}]}
                        cx={'50%'}
                        cy={'50%'}
                        innerRadius={'52%'}
                        outerRadius={'93%'}
                        stroke="none"
                        startAngle={220}
                        endAngle={-40}
                        animationDuration={600}>
                        <Cell fill={color}></Cell>
                        <Cell fill="none" ></Cell>
                        <Label position={'center'} fontSize={16} fill={theme.colors.text}>{`${value}${unit ?? ''}`}</Label>
                        <Label position={'insideBottom'} fontSize={22} fill={theme.colors.text}>{label}</Label>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </MainWrapper>    
    </>);
}

const MainWrapper = styled.div(({})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
}));