import { useEffect } from 'react';
import { Dashboard } from './pages'
import { useServicesStore } from './stores';

export default function App() {
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

  return (
    <>
      <Dashboard/>
    </>
  )
};

