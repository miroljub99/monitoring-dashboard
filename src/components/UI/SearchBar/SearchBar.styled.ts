/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const InputWrapper = styled.div(({theme:{spacing}})=>({
    userSelect:'none',
    position:'relative',
    width:'100%',
    minWidth:'0',
    maxWidth:spacing(120),
    outline:'none',
}));

export const StyledInput = styled.input(({theme:{spacing,font,colors,borderRadius}})=>({
    width: '100%',
    padding:`${spacing(3)} ${spacing(6)} ${spacing(3)} ${spacing(10)}`,
    fontSize:font.size.paragraph,
    border:`1px solid ${colors.border}`,
    borderRadius:borderRadius.sm,
    outline:`none`,
    background:colors.background,
    color:colors.text,
}));

export const IconWrapper = styled.div(({theme:{spacing,colors}})=>({
    position:'absolute',
    top:'55%',
    left:spacing(3),
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color:colors.textMuted,

}));