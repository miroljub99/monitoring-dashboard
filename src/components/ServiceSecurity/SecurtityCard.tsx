import { type LucideIcon } from "lucide-react";
import styled from "@emotion/styled";
import { Paragraph } from "../UI/Typography";

interface SecurityCardProps{
    label: string;
    value: number | string;
    icon: LucideIcon;
}

export default function SecurityCard(props:SecurityCardProps){

    const {label,value,icon} = props;
    const Icon = icon;

    return(<>
        <MainWrapper>
            <Icon size={28}/>
            <Paragraph style={{ fontWeight: 600 }}>{label}</Paragraph>
            <Paragraph style={{ opacity: 0.8 }}>{value}</Paragraph>
        </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(2),
    width:300,
}));