
/**
 * Represents a historical event related to a service, such as restarts or incidents.
 */
export interface Event {
    timestamp: string;   // ISO timestamp of the event (e.g., '2025-07-01T12:00:00Z')
    type: string;        // Type of event (e.g., 'restart', 'failure')
    message: string;     // Additional message describing the event
}

/**
 * Contains security-related information for a service.
 */
interface Security {
    incidents: number;           // Number of recorded security incidents
    firewall: string;            // Firewall status (e.g., 'active', 'inactive')
    vulnerabilityScan: string;   // Result of the latest vulnerability scan (e.g., 'clean', 'issues found')
}

interface ResponseTimeHistory{
    timestamp: string;
    value: number;
}

/**
 * Represents the state and metadata of a monitored service.
 */
export interface Service {
    id: number;                      // Unique identifier of the service
    name: string;                    // Name of the service
    version: string;                 // Service version number (e.g., '1.3.2')
    status: 'online' | 'offline' | 'degraded';  // Current operational status
    uptime: number;                  // Uptime percentage (e.g., 99.98)
    responseTime: number;            // Response time in milliseconds
    cpu: number;                     // CPU usage in percentage
    memory: number;                  // Memory usage in MB
    errors: number;                  // Number of errors detected
    load: number;                    // System load indicator
    countryCode: string;             // ISO 3166-1 alpha-2 country code (e.g., 'DE')
    events: Event[];                 // Array of recent service events
    security: Security;              // Security details for the service
    responseTimeHistory: ResponseTimeHistory[];
}