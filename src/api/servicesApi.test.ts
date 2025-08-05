import { fetchServices } from "./servicesApi";
import axios from "axios";
import { type Service } from "../types";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockService: Service = {
  id: "1",
  name: "Monitoring Service",
  version: "1.0.0",
  status: "online",
  uptime: 99.99,
  responseTime: 200,
  cpu: 45,
  memory: 2048,
  errors: 0,
  load: 1.2,
  countryCode: "US",
  events: [
    {
      timestamp: "2024-06-29T12:00:00Z",
      type: "INFO",
      message: "Service started",
    },
  ],
  security: {
    incidents: 0,
    firewall: "enabled",
    vulnerabilityScan: "clean",
  },
  "responseTimeHistory": [
        {
          "timestamp": "2025-06-30T12:00:00Z",
          "value": 105
        },
        {
          "timestamp": "2025-07-01T12:00:00Z",
          "value": 60
        },
        {
          "timestamp": "2025-07-02T12:00:00Z",
          "value": 78
        },
        {
          "timestamp": "2025-07-03T12:00:00Z",
          "value": 92
        },
        {
          "timestamp": "2025-07-04T12:00:00Z",
          "value": 52
        }
      ]
};

describe('fetchServices',()=>{

    test("Fetch success",async ()=>{

       mockedAxios.get.mockResolvedValue({data: [mockService]});

       const result = await fetchServices();

       expect(result).toEqual([mockService])

    });
});
