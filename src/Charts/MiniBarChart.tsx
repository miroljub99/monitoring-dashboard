import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {getPercent,getColorFromPercent} from '../utils/ChartUtils';
import { useTheme } from "@emotion/react";
import { Paragraph } from "@/components";

interface MiniBarChartProps{
    label: string;
    value: number;
    maxValue: number;
    unit?: string;
    threshold?:{
        green: number;
        orange: number;
        red: number;
    },
    width?: number;
    height?: number;
    invert?:boolean;
}

const defaultThreshold = {green:40,orange:70,red:100};

export default function MiniBarChart(props:MiniBarChartProps){

    const {label,value,maxValue,unit,threshold,width,height,invert} = props;
    const theme = useTheme();
    const percent: number = getPercent(value,maxValue);
    const color: string = getColorFromPercent(percent,threshold ?? defaultThreshold,theme,invert);

    return(<>
       <MainWrapper > 
            <LabelWrappper><Paragraph>{label}</Paragraph><Paragraph>{value}{unit}</Paragraph></LabelWrappper>
            <BarWrapper width={width} height={height}>
                <BarLine width = {`${percent}%`} color={color}/>
            </BarWrapper>
       </MainWrapper>
    </>);
}

const BarWrapper = styled.div<{width?:number,height?:number}>(({width,height,theme:{colors,borderRadius}})=>({
        width:width ?? '100%',
        height:height ?? '100%',
        background:colors.background,
        border:`2px solid ${colors.border}`,
        borderRadius: borderRadius.sm,
        overflow:'hidden',
}));

const grow = (width: string) => keyframes`
  from { width: 0%; }
  to { width: ${width}; }
`;

const BarLine = styled.div<{width:string,color:string}>(({width,color})=>({
    width:0,
    height:'100%',
    background: color,
    animation: `${grow(width)} 0.6s ease-out forwards`,
    animationDelay: '0.6s',
}));

const LabelWrappper = styled.div(({})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
}));

const MainWrapper = styled.div<{width?:number,height?:number}>(({width,height,theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(1),
    width:'100%',
}));