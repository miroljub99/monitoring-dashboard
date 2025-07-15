import { ServiceList } from "@/container";
import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout,HeaderLayout } from "./Dashboard.styled";
import { useServicesStore } from "@/stores";
import {SideBar,Header} from '@/components'

export default function Dashboard(){

    const fetch = useServicesStore(state => state.fetchAndSetServices)

    return(<>
    <DashboardLayout>
        <SideBarLayout>
            <SideBar/>
        </SideBarLayout>
        <ContentAreaLayout>
            <NavBarLayout>
                <Header/>
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