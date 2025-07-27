import styled from "@emotion/styled";

interface LoadingProps{
    label:string;
}

export default function Loading({label}:LoadingProps){
    
    return(<>
    <MainWrapper>
        <LoadingWrapper>
            <Spinner/>
            {label}
        </LoadingWrapper>
    </MainWrapper>
    </>);
}

const Spinner = styled.div(({theme:{colors}})=>({
    width:32,
    height:32,
    border:`4px solid ${colors.border}`,
    borderTop:`4px solid ${colors.text}`,
    borderRadius: '50%',
    animation:`spin 1s linear infinite`,

    '@keyframes spin':{
        from:{transform: `rotate(0deg)`},
        to:{transform: `rotate(360deg)`}
    }

}));

const LoadingWrapper = styled.div(({theme:{spacing,colors,borderRadius}})=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:spacing(2),
    padding:spacing(6),
    border:`2px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    background:colors.surface,
}));

const MainWrapper = styled.div(({})=>({
    userSelect:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
}));