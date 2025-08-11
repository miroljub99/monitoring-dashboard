import ResponsiveTimeChart from "@/charts/ResponsiveTimeChart";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Paragraph } from "../UI/Typography";

interface ServiceResponsiveTimeProps{
    data:{timestamp: string,value: number}[];
}

export default function ServiceResponsiveTime({data}: ServiceResponsiveTimeProps){

    const theme = useTheme();

    return(<>
    
    <MainWrapper>
        <Paragraph>Response Time</Paragraph>
        <ResponsiveTimeChart data={data} fontSize={12} color={theme.colors.primary} width={'100%'} height={220}/>
    </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{colors,borderRadius,spacing,shadow,media}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:`${spacing(4)} ${spacing(6)}`,
    width:600,
    minWidth:0,
    background:colors.surface,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: shadow.md,
    [media.laptop]:{
        flexGrow:1,
    }
}));