import styled from "@emotion/styled";


export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 8px 0px;

    width: auto;

    border: 1px solid white;

`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    flex:1;

    padding: 0px 23px;
    
    max-width: 360px;

    > :nth-child(1){
        flex:4;
     }
    > :nth-child(2){
        flex:2;
     }

    > :nth-child(3){
        flex:1;
     }
`;

export const MetricSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:12px;
    flex:1;

    padding: 0px 8px;

    max-width: 320px;

`;

export const TechnicalSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex:1;

    padding: 0px 23px;

    max-width: 320px;
`;



