
interface Event {
    timestamp: string;
    type: string;
    message: string;
}

interface Security {
    incidents: number;
    firewall: string;
    vulnerabilityScan: string;
}


export interface Service {
    id: number;
    name: string;
    version: string;
    status: 'online' | 'offline' | 'degraded';
    uptime: number;
    responseTime: number;
    cpu: number;
    memory: number;
    errors: number;
    load: number;
    countryCode: string;
    events: Event[];
    security: Security;
}