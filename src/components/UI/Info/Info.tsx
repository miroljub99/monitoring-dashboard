import styled from "@emotion/styled";
import { SearchX } from "lucide-react";

interface InfoProps{
    label: string;
}

export default function Infp({label}:InfoProps){

    return(<>
    <MainWrapper>
        <InfoWrapper>
            <SearchX size={32}/>
            {label}
        </InfoWrapper>
    </MainWrapper>
    </>)
}

const MainWrapper = styled.div(({})=>({
    userSelect:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',

}));

const InfoWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    color: colors.text,
    gap:spacing(2),
    padding:spacing(6),
    border:`2px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    background:colors.surface,

}));