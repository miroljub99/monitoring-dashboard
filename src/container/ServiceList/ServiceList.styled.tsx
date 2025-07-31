import styled from "@emotion/styled";

export const ServiceListWrapper =  styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
    padding: 24px 12px;
    width: auto;
    border: 1px solid ${({theme})=>( theme.colors.border)};
    border-radius: ${({theme})=>( theme.borderRadius.md)};
    box-shadow: ${({theme})=>( theme.shadow.md)};
`;
