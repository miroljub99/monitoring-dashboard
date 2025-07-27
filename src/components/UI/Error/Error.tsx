import styled from "@emotion/styled";
import { AlertOctagon } from "lucide-react";

interface ErrorProps{
    label: string;
}

export default function Error({label}:ErrorProps){

    return(<>
    <MainWrapper>
        <ErrorWrapper>
            <AlertOctagon size={32}/>
            {label}
        </ErrorWrapper>
    </MainWrapper>
    </>)
}

const MainWrapper = styled.div(({})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',

}));

const ErrorWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    color: colors.error,
    gap:spacing(2),
    padding:spacing(6),
    border:`2px solid ${colors.error}`,
    borderRadius: borderRadius.sm,
    background:colors.surface,

}));