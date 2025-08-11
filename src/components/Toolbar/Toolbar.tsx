import styled from "@emotion/styled";
import {Button,Paragraph} from '@/components';
import { useServicesStore } from "@/stores";
import { api } from "@/api";


function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
}

export default function Toolbar(){
    const services = useServicesStore(state => state.services)
    const refresh = useServicesStore(state => state.fetchAndSetServices);
    const clearStore = useServicesStore(state => state.resetStore);
    const startPolling = useServicesStore(state => state.startPolling);
    const stopPolling = useServicesStore(state => state.stopPolling);
    const isPolling = useServicesStore(state => state.isPolling);
    const lastFetched = useServicesStore(state => state.lastFetched);
    const error = useServicesStore(state => state.error);
    const retry = useServicesStore(state => state.retryCount);
    const setRetry = useServicesStore(state => state.setRetryCount);

    function handlePolling(){
        if(isPolling){
            stopPolling();
        }else{
            startPolling();
        }
    }

    return(<>
    <ToolbarWrapper>
        <BoxWrapper>    
            <AboveSide>
                <Paragraph>Polling: {isPolling ? '🟢 ON':'🔴 OFF'}</Paragraph>
                <Paragraph>Last Fetched: {lastFetched ? formatTime(lastFetched):'N/A'}</Paragraph>
            </AboveSide>
            <BelowSide>
                <Button size="lg" onClick={refresh}>Refresh</Button>
                <Button size="lg" onClick={handlePolling}>{isPolling ? 'Stop Polling': 'Start Polling'}</Button>
            </BelowSide>
        </BoxWrapper>
        <BoxWrapper>
            <AboveSide>
                <Paragraph>Total Services: {services.length}</Paragraph>
                <Paragraph>Api Endpoints: {api}</Paragraph>
            </AboveSide>
            <BelowSide>
                <Button size="lg" onClick={clearStore}>Clear Store</Button>
            </BelowSide>
        </BoxWrapper>
        <BoxWrapper>
            <AboveSide>
                <Paragraph>Retry Attempts: {retry}</Paragraph>
                <Paragraph>Errors: {error ? error: 'No errors'}</Paragraph>
            </AboveSide>
            <BelowSide>
                <Button size="lg" onClick={()=> setRetry(0)}>Reset Retry</Button>
            </BelowSide>
        </BoxWrapper>
    </ToolbarWrapper>
    </>);
}

const ToolbarWrapper = styled.div(({theme:{colors,spacing,borderRadius,shadow}})=>({
    display:'flex',
    flexDirection:'row',
    gap:spacing(4),
    padding:`${spacing(6)} ${spacing(4)}`,
    borderRadius:borderRadius.md,
    background:colors.background,
    border:`1px solid ${colors.border}`,
    boxShadow: shadow.md,
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

const BoxWrapper = styled.div(({theme:{spacing,borderRadius,colors,shadow}})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    gap:spacing(4),
    width:'100%',
    padding:`${spacing(6)} ${spacing(4)}`,
    borderRadius:borderRadius.md,
    background:colors.surface,
    border:`1px solid ${colors.border}`,
    boxShadow:shadow.sm,
}));