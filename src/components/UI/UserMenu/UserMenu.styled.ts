import styled from "@emotion/styled";

export const UserWrapper = styled.div(({theme:{spacing,colors,borderRadius,shadow,media}})=>({
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
    },
    "& > p:first-of-type": {
        [media.laptop]:{
            display:'none',
        }
    }
}));

export const DropDownMenu = styled.div(({theme:{spacing,colors,shadow,media}})=>({
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
    'span':{
        color:colors.textMuted,
    },
    [media.laptop]:{
        width:200,
        right:'2%',
        zIndex:4,
    }
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

