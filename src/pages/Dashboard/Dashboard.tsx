import { ServiceList,ServiceDetail } from "@/container";
import { DashboardLayout,SideBarLayout,ContentAreaLayout,NavBarLayout,MainLayout} from "./Dashboard.styled";
import { useServicesStore } from "@/stores";
import {SideBar,Header} from '@/components';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from "react";

export default function Dashboard(){

    const fetch = useServicesStore(state => state.fetchAndSetServices)

    useEffect(()=>{
        fetch();
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
                <button onClick={fetch}>Fetch me</button>
                <Routes>
                    <Route path="/" />
                    <Route path="/dashboard" element={<ServiceList/>}/>
                    <Route path='/service/:id' element={<ServiceDetail/>}/>
                </Routes>
            </MainLayout>
        </ContentAreaLayout>
    </DashboardLayout>
    </>)
};