import { ServiceDetail,ServiceContainer } from "@/container";
import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout} from "./Dashboard.styled";
import { useServicesStore } from "@/stores";
import {SideBar,Header} from '@/components';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from "react";

export default function Dashboard(){

    const startPolling = useServicesStore(state => state.startPolling);
    const stopPolling = useServicesStore(state => state.stopPolling);

    useEffect(()=>{

       startPolling();
       
       return ()=>{
        stopPolling();
       }
    },[]);

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
                <Routes>
                    <Route path="/" />
                    <Route path="/dashboard" element={<ServiceContainer/>}/>
                    <Route path='/service/:id' element={<ServiceDetail/>}/>
                </Routes>
            </MainLayout>
        </ContentAreaLayout>
    </DashboardLayout>
    </>)
};