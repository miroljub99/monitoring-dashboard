import {ServiceList} from '@/container';
import { Toolbar } from '@/components';
import styled from '@emotion/styled';

export default function ServiceContainer(){
    
    return(<>
        <ContainerWrapper>
            <Toolbar/>
            <ServiceList/>
        </ContainerWrapper>
    </>);
}

const ContainerWrapper = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(3),
    height:'100%',
    minHeight:0,

}));