import styled from "@emotion/styled";

export const CardWrapper = styled.div(({theme:{spacing,colors,borderRadius,shadow,media}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    padding:`${spacing(8)} ${spacing(6)}`,
    width:'auto',
    background:colors.surface,
    border:`2px solid ${colors.border}`,
    borderRadius:borderRadius.sm,
    boxShadow:shadow.md,
    [media.desktop]:{
        padding:`${spacing(6)} ${spacing(4)}`,
    },
}));

export const HeaderSection = styled.div(({theme:{spacing,media}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:spacing(2),
    flex:1,
    maxWidth:400,
    "> :nth-of-type(1)":{
        flex:3,
    },
    '> :nth-of-type(2)':{
        flex:2,
    },
    '> :nth-of-type(3)':{
        flex:1,
    },

    [media.desktop]:{
        maxWidth:300,
        "> :nth-of-type(1)":{
            flex:2,
        },
        '> :nth-of-type(2)':{
            flex:1,
        },
        '> :nth-of-type(3)':{
            flex:1,
        },
    },
    [media.laptop]:{
        maxWidth:280,
    },
}));

export const MetricSection = styled.div(({theme:{spacing,media}})=>({
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    alignItems:'center',
    gap:spacing(3),
    flex:1,
    maxWidth:320,
}));

export const TechnicalSection = styled.div(({theme:{spacing,media}})=>({
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    alignItems:'center',
    gap:spacing(3),
    flex:1,
    maxWidth:320,
    [media.laptop]:{
        display:'none',
        flex:'none',
    }
}));





