/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const SideBarWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection: 'column',
    gap:`${spacing(4)}`,
    height:'100%',
    minHeight:"0",
    padding: `${spacing(2)} ${spacing(0)}`,

}))

export const LogoWrapper = styled.div(({theme:{spacing,colors}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'left',
    alignItems:'center',
    textAlign:'left',
    gap:`${spacing(2)}`,
    height:`${spacing(16)}`,
    padding:`${spacing(2)} ${spacing(4)}`,
    borderBottom:`2px solid ${colors.border}`,
}));

export const NavWrapper = styled.div(({theme})=>({
    flex:'2',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

}));

export const SideTopWrapper = styled.div(({theme})=>({

}));

export const SideBottomWrapper = styled.div(({theme})=>({

}));