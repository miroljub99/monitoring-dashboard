import { ServiceList } from "@/container";
import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout,HeaderLayout } from "./Dashboard.styled";
import { useServicesStore } from "@/stores";
import {SideBar,Header} from '@/components';
import { Routes,Route } from 'react-router-dom';


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
                <Routes>
                    <Route path="/" />
                    <Route path="/dashboard" element={<ServiceList/>}/>
                </Routes>
            </MainLayout>
        </ContentAreaLayout>
    </DashboardLayout>
    </>)
};