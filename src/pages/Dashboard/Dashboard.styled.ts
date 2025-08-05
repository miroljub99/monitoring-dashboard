import styled from "@emotion/styled";

export const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    height: 100vh;
    min-height: 0;

    ${props => props.theme.media.desktop}{
    grid-template-columns: 240px 1fr;
    };
    ${props => props.theme.media.laptop}{
    grid-template-columns: 1fr 11fr;
    };
    ${props => props.theme.media.tablet}{
    grid-template-columns: 1fr;
    };
`;

export const SideBarLayout = styled.aside`
    height:100%;
    min-height: 0;
    background-color:${({theme})=>( theme.colors.surface)};
    border-right: 2px solid ${({theme})=>( theme.colors.border)};
    border-bottom: 3px solid ${({theme})=>( theme.colors.border)};
    box-shadow: ${({theme})=>( theme.shadow.md)};

    ${props => props.theme.media.tablet}{
     display: none;
    }
`;

export const ContentAreaLayout = styled.div`
    display: grid;
    grid-template-rows: 72px 1fr;
    min-height: 0;

    border-bottom: 2px solid ${({theme})=>( theme.colors.border)};
`;

export const NavBarLayout = styled.nav`
    background: ${({theme})=>( theme.colors.surface)};
    border-bottom: 2px solid ${({theme})=>( theme.colors.border)};
    box-shadow: ${({theme})=>( theme.shadow.sm)};
`;

export const MainLayout = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
    overflow-x: hidden;
    width: 100%;
    max-width: 1440px;
    max-height: 100%;
    min-height: 0;
    min-width: 0;
    margin: 0 auto;
    padding: ${({theme:{spacing}})=>(spacing(4))} ${({theme:{spacing}})=>(spacing(8))};

    ${props => props.theme.media.laptop}{
        padding: ${({theme:{spacing}})=>(spacing(2))} ${({theme:{spacing}})=>(spacing(3))};
    };
    ${props => props.theme.media.tablet}{
        padding: ${({theme:{spacing}})=>(spacing(2))} ${({theme:{spacing}})=>(spacing(2))};
        margin: 0;
    }
`;

export const HeaderLayout = styled.div`
    height: 240px;
    border: 2px solid ${({theme})=>( theme.colors.border)};
`