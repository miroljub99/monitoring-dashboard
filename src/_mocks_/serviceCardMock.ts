import type { ServiceCardProps } from '@/components/ServiceCard/ServiceCard';


export const mockCardProps: ServiceCardProps = {
  id: "1",
  name: 'Monitoring Service',
  status: 'online',
  responseTime: 200,
  cpu: 45,
  memory: 2048,
  load: 1.2,
  uptime: 99.99,
  errors: 0,
  countryCode: 'US',
  onClick: jest.fn(),
};