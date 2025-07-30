import styled from "@emotion/styled"

export const ButtonWrapper = styled.button(({theme:{spacing,colors,font}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:`${spacing(3)}`,
    fontFamily:font.family,
    fontWeight:font.weight.medium,
    width:'100%',
    background:'none',
    border:'none',
    color:`${colors.text}`,

    span:{
        flexGrow:'1',
        textAlign:'left',
    },
}));

export const ContentWrapper = styled.div<{isOpen: boolean}>(({isOpen,theme:{spacing}})=>({
    display: isOpen ? 'flex':'none',
    flexDirection:'column',
    width:'100%',
    paddingTop:`${spacing(4)}`,
    paddingLeft:`${spacing(6)}`,
}))