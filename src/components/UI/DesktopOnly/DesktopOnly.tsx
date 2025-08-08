import styled from "@emotion/styled";
import { Heading2 } from "../Typography";

export default function DestkopOnly(){
    return(<>
        <Container>
            <Heading2>Optimized for desktop viewing</Heading2>
        </Container>
    </>);
}

const Container = styled.div(({})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
}));

