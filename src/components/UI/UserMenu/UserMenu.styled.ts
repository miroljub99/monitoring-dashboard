import styled from "@emotion/styled";

export const UserWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(4),
}));