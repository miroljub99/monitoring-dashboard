import { ServiceList } from "@/container";
import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout,HeaderLayout } from "./Dashboard.styled";
import { useServicesStore } from "@/stores";

export default function Dashboard(){

    const fetch = useServicesStore(state => state.fetchAndSetServices)

    return(<>
    <DashboardLayout>
        <SideBarLayout>
            <p>Side Bar</p>
        </SideBarLayout>
        <ContentAreaLayout>
            <NavBarLayout>
                <p>Navbar</p>
            </NavBarLayout>
            <MainLayout>
                <HeaderLayout>
                    <h2>Ovde ide Header 2</h2>
                    <button onClick={fetch}>Fetchuj me</button>
                </HeaderLayout>
                <ServiceList/>
            </MainLayout>
        </ContentAreaLayout>
    </DashboardLayout>
    </>)
};