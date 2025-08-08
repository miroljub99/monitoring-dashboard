import { useEffect } from 'react';
import { Dashboard,PageNotFound } from './pages'
import { useServicesStore } from './stores';
import { Routes,Route } from 'react-router-dom';
import { ServiceDetail,ServiceContainer } from "@/container";
import {Home} from "@/pages";
import {Info,DesktopOnly} from '@/components';
import { useMediaQuery } from './utils/hooks';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 960px)');

  //Check online status
  useEffect(() => {
  const setOffline = () => useServicesStore.getState().setIsOffline(true);
  const setOnline = () => useServicesStore.getState().setIsOffline(false);

  window.addEventListener('offline', setOffline);
  window.addEventListener('online', setOnline);

  return () => {
    window.removeEventListener('offline', setOffline);
    window.removeEventListener('online', setOnline);
      };
  }, []);

  if(isMobile) return(<DesktopOnly/>);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
            <Route path="" element={<Home/>}/>
            <Route path="dashboard" element={<ServiceContainer/>}/>
            <Route path='service/:id' element={<ServiceDetail/>}/>
            <Route path="settings" element={<Info label="Comming Soon"/>}/>
            <Route path="support" element={<Info label="Comming Soon"/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
};

