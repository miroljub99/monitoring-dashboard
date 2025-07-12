import styled from "@emotion/styled";


export const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;

    height: 100vh;
    min-height: 0;
`;

export const SideBarLayout = styled.aside`
    height:99.9%;
    min-height: 0;

    border-right: 1px solid white;
    border-bottom: 1px solid white;
`;

export const ContentAreaLayout = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;

    min-height: 0;

    border-bottom: 1px solid white;
`;

export const NavBarLayout = styled.nav`
    border-bottom: 1px solid white;
`;

export const MainLayout = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 100%;
    min-height: 0;
    overflow: hidden;

    padding: 20px 36px;
`;

export const HeaderLayout = styled.div`
    height: 240px;

    border: 2px solid green;
`