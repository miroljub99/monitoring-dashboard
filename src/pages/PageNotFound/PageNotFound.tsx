import styled from "@emotion/styled";
import { Button, Heading1, Heading2 } from "@/components";
import { useNavigate } from "react-router-dom";

export default function PageNotFound(){
    const navigate = useNavigate();

    return(<>
        <Wrapper>
            <Heading1 style={{fontSize:'240px', fontWeight:'bold', lineHeight:'300px'}}>404.</Heading1>
            <Heading2 style={{lineHeight:'32px'}}>Sorry, we couldn not find the page </Heading2>
            <Button size="lg" onClick={()=> navigate('/')}>Go Home</Button>
        </Wrapper>
    </>);
}

const Wrapper = styled.div(({theme:{spacing}})=>({
    userSelect:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap: spacing(8),
    width:'100%',
    height:'100%',

}));