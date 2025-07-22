import styled from "@emotion/styled";
import { Heading2,Heading3,Paragraph } from "../UI/Typography";
import { StatusBadgeChart} from "@/Charts";
import { useCountry } from "@/graphql";

interface MainInformationProps{
    name:string;
    status: 'online' | 'offline' | 'degraded';
    version: string;
    countryCode:string;
}

export default function MainInformation({name,status,version,countryCode}:MainInformationProps){

    const {data,loading,error} = useCountry(countryCode);
    const country = data?.country;
    const textLabel = loading ? 'Loading...' : `${country?.emoji}  ${country?.name}  ( ${country?.continent.name} )`;

    return(<>
        <MainWrapper>
            <LeftSection>
                <Heading2>{name}</Heading2>
                <Heading3>Version: {version}</Heading3>
                <Paragraph>{error ? 'Could not load country info' : textLabel}</Paragraph>
            </LeftSection>
            <RightSection>
                <StatusBadgeChart data={status}/>
            </RightSection>
        </MainWrapper>
    </>);
}

const MainWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    gap:spacing(8),
    padding:`${spacing(4)} ${spacing(12)}`,
    background:colors.surface,
    borderRadius:borderRadius.lg,
}));
const LeftSection = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:spacing(4),
    
}));
const RightSection = styled.div(({theme:{spacing}})=>({
    flex:1,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:spacing(4),
}));

