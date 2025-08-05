import styled from "@emotion/styled";

export const UserWrapper = styled.div(({theme:{spacing,colors,borderRadius,shadow}})=>({
    userSelect:'none',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(4),
    padding:`${spacing(2)} ${spacing(3)}`,
    borderRadius:borderRadius.sm,
    cursor:'pointer',
    transition:'background-color 0.2s ease',
    "&:hover":{
        background: colors.button.hover,
        boxShadow: shadow.md,
    }
}));

export const DropDownMenu = styled.div(({theme:{spacing,colors,shadow}})=>({
    position:'absolute',
    top:`calc(100% + 8px)`,
    display:'flex',
    flexDirection:'column',
    gap:spacing(5),
    minHeight:0,
    height:'auto',
    width:'100%',
    padding:`${spacing(5)}`,
    background:colors.surface,
    border:`1px solid ${colors.border}`,
    boxShadow: shadow.sm,
}));

export const Divider = styled.div(({theme:{colors,spacing}})=>({
    width:'100%',
    height:spacing(0.5),
    background:colors.border,

}));

export const Wrapper = styled.div(({})=>({
    position:'relative',
    display:'flex',
    flexDirection:'row',
}));

