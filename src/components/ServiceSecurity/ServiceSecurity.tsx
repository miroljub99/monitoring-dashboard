import SecurityCard from "./SecurtityCard";
import { ShieldCheck,ShieldX,ScanLine } from "lucide-react";
import styled from "@emotion/styled";

interface ServiceSecurityProps{
    incidents: number;
    firewall: string;
    vulnerabilityScan: string;
}

export default function ServiceSecurity(props:ServiceSecurityProps){
    const {incidents,firewall,vulnerabilityScan} = props;
    return(<>
     <MainWrapper>
        <SecurityCard label="FireWall" value={firewall} icon={ShieldCheck}/>
        <SecurityCard label="Incidents" value={incidents} icon={ShieldX}/>
        <SecurityCard label="Vulnerabiltiy" value={vulnerabilityScan} icon={ScanLine}/>
     </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{colors,borderRadius,spacing}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    background:colors.surface,
    borderRadius: borderRadius.lg,
    padding:`${spacing(12)} ${spacing(6)}`
}));