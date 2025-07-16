import styled from "@emotion/styled";

export const UserWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    userSelect:'none',
    position:'relative',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(4),
    borderRadius:borderRadius.sm,
    cursor:'pointer',
    "&:hover":{
        background: colors.button.hover
    }
}));

export const DropDownMenu = styled.div(({theme:{spacing,colors}})=>({
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
}));

export const Divider = styled.div(({theme:{colors,spacing}})=>({
    width:'100%',
    height:spacing(0.5),
    background:colors.border,

}))