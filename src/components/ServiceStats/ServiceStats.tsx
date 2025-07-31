import styled from "@emotion/styled";
import { MiniBarChart } from "@/Charts";

interface ServiceStatsProps{
    uptime: number;
    load: number;
    errors: number;
}
export default function ServiceStats(props: ServiceStatsProps){

    const {uptime,load,errors} = props;

    return(<>
    <MainWrapper>
        <MiniBarChart label="UpTime" value={uptime} unit=" %" maxValue={100}  height={16} invert={true}/>
        <MiniBarChart label="Load" value={load} maxValue={2}  height={16} threshold={{green:50,orange:80,red:100}}/>
        <MiniBarChart label="Errors" value={errors} maxValue={20} height={16} threshold={{green:1,orange:10,red:100}}/>
    </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{spacing,colors,borderRadius,shadow}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:spacing(4),
    width:'100%',
    padding:`${spacing(2)} ${spacing(4)}`,
    background:colors.surface,
    borderRadius:borderRadius.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: shadow.md,
}));