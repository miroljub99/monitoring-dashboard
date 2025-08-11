import SecurityCard from "./SecurityCard";
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

const MainWrapper = styled.div(({theme:{colors,borderRadius,spacing,shadow,media}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    background:colors.surface,
    borderRadius: borderRadius.lg,
    padding:`${spacing(12)} ${spacing(6)}`,
    border: `1px solid ${colors.border}`,
    boxShadow: shadow.md,
    [media.laptop]:{
      flexGrow:1,
      padding:`${spacing(6)} ${spacing(6)}`,
      gap:spacing(6),
    }
}));