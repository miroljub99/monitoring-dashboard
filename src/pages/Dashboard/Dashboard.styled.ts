import styled from "@emotion/styled";

export const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;

    height: 100vh;
    min-height: 0;
`;

export const SideBarLayout = styled.aside`
    height:100%;
    min-height: 0;

    background-color:${({theme})=>( theme.colors.surface)};

    border-right: 2px solid ${({theme})=>( theme.colors.border)};
    border-bottom: 2px solid ${({theme})=>( theme.colors.border)};
`;

export const ContentAreaLayout = styled.div`
    display: grid;
    grid-template-rows: 72px 1fr;
    min-height: 0;

    border-bottom: 2px solid ${({theme})=>( theme.colors.border)};
`;

export const NavBarLayout = styled.nav`
    background: ${({theme})=>( theme.colors.surface)};

    border-bottom: 1px solid ${({theme})=>( theme.colors.border)};
`;

export const MainLayout = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;

    width: 100%;
    max-width: 1440px;
    max-height: 100%;
    min-height: 0;
    
    margin: 0 auto;
    padding: ${({theme:{spacing}})=>(spacing(4))} ${({theme:{spacing}})=>(spacing(8))};
`;

export const HeaderLayout = styled.div`
    height: 240px;

    border: 2px solid ${({theme})=>( theme.colors.border)};
`