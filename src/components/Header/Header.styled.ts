/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const HeaderWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'100%',
    padding:`${spacing(4)} ${spacing(8)}`,
}));

export const LeftSection = styled.div(({})=>({
    flex:'1',
}));

export const RightSection = styled.div(({theme:{spacing,media}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(4),
    [media.desktop]:{
        gap:spacing(1),
    },
}));