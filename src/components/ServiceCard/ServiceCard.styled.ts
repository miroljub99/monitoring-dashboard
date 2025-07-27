import styled from "@emotion/styled";


export const CardWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:`${spacing(8)} ${spacing(6)}`,
    width:'auto',
    background:colors.surface,
    border:`3px solid ${colors.border}`,
    borderRadius:borderRadius.sm,
}));



export const HeaderSection = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:spacing(2),
    flex:1,
    maxWidth:400,
    "> :nth-child(1)":{
        flex:3,
    },
    '> :nth-child(2)':{
        flex:2,
    },
    '> :nth-child(3)':{
        flex:1,
    }
}));


export const MetricSection = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:spacing(3),
    flex:1,
    maxWidth:320,
}));



export const TechnicalSection = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:spacing(3),
    flex:1,
    maxWidth:320,
}));





