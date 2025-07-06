import { type Service } from '../types';

/**
 * Mock service data representing a healthy, online service.
 * Used for testing standard functionality within the monitoring dashboard.
 */
export const mockService: Service = {
  id: 1,
  name: 'Monitoring Service',
  version: '1.0.0',
  status: 'online',
  uptime: 99.99,
  responseTime: 200,
  cpu: 45,
  memory: 2048,
  errors: 0,
  load: 1.2,
  countryCode: 'US',
  events: [
    {
      timestamp: '2024-06-29T12:00:00Z',
      type: 'INFO',
      message: 'Service started'
    }
  ],
  security: {
    incidents: 0,
    firewall: 'enabled',
    vulnerabilityScan: 'clean'
  }
};