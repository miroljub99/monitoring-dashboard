import styled from "@emotion/styled";
import {Button,Paragraph} from '@/components';
import { useServicesStore } from "@/stores";


function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
}

export default function Toolbar(){
    const refresh = useServicesStore(state => state.fetchAndSetServices);
    const clearStore = useServicesStore(state => state.resetStore);
    const startPolling = useServicesStore(state => state.startPolling);
    const stopPolling = useServicesStore(state => state.stopPolling);
    const isPolling = useServicesStore(state => state.isPolling);
    const lastFetched = useServicesStore(state => state.lastFetched);
    const error = useServicesStore(state => state.error);
    const isOffline = useServicesStore(state => state.isOffline);

    function handlePolling(){
        if(isPolling){
            stopPolling();
        }else{
            startPolling();
        }
    }

    return(<>
    <ToolbarWrapper>
        <AboveSide>
            <Paragraph>Polling: {isPolling ? '🟢 ON':'🔴 OFF'}</Paragraph>
            <Paragraph>Last Fetched: {lastFetched ? formatTime(lastFetched):'N/A'}</Paragraph>
        </AboveSide>
        <BelowSide>
            <Button size="lg" onClick={refresh}>Refresh</Button>
            <Button size="lg" onClick={handlePolling}>{isPolling ? 'Stop Polling': 'Start Polling'}</Button>
        </BelowSide>
    </ToolbarWrapper>
    </>);
}

const ToolbarWrapper = styled.div(({theme:{colors,spacing,borderRadius}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(4),
    padding:`${spacing(6)} ${spacing(4)}`,
    borderRadius:borderRadius.md,
    background:colors.background,
    border:`1px solid ${colors.border}`
}));

const BelowSide = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'row',
    gap:spacing(2),
}));

const AboveSide = styled.div(({theme:{spacing}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(2),
    
}));