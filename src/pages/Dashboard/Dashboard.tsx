import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout} from "./Dashboard.styled";
import { useServicesStore } from "@/stores";
import {SideBar,Header} from '@/components';
import { useEffect } from "react";
import { Outlet } from "react-router-dom";


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
                <Outlet/>
            </MainLayout>
        </ContentAreaLayout>
    </DashboardLayout>
    </>)
};