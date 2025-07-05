import { fetchServices } from "./servicesApi";
import axios from "axios";
import { type Service } from "../types";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockService: Service = {
  id: 1,
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
};

describe('fetchServices',()=>{

    test("Fetch success",async ()=>{

       mockedAxios.get.mockResolvedValue({data: [mockService]});

       const result = await fetchServices();

       expect(result).toEqual([mockService])

    });
});
