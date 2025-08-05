import { screen, } from "@testing-library/react";
import '@testing-library/jest-dom';
import ServiceList from "./ServiceList";
import { useServicesStore } from "@/stores";
import { mockService } from "@/_mocks_/servicesMocks";
import { renderWithProviders } from '@/test-utils';


jest.mock('@/stores',()=>({
    useServicesStore: jest.fn()
}));


describe('ServiceList ',()=>{
    it('renders loading state when loading is true',()=>{
        (useServicesStore as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
                services: [],
                loading: true,
                error: null,
                fetchAndSetServices: jest.fn(),
                query: "",
                setQuery: jest.fn(),
            })
        );

        renderWithProviders(<ServiceList/>);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('renders error state when error is present',()=>{
        (useServicesStore as unknown as jest.Mock).mockImplementation((selector)=> 
            selector({
                services:[],
                loading:false,
                error: 'Something get wrong',
                fetchAndSetServices: jest.fn(),
                query: "",
                setQuery: jest.fn(),
            }));

        renderWithProviders(<ServiceList/>);

        expect(screen.getByText(/Something get wrong/i)).toBeInTheDocument();
    });

    it("renders 'No services available' when services list is empty", () => {
        (useServicesStore as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
            services: [],
            loading: false,
            error: null,
            fetchAndSetServices: jest.fn(),
            query: "",
            setQuery: jest.fn(),
            })
        );

        renderWithProviders(<ServiceList/>);
        expect(screen.getByText(/No services available/i)).toBeInTheDocument();
    });
    it("renders service cards when services are available", () => {

        (useServicesStore as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
            services: [mockService],
            loading: false,
            error: null,
            fetchAndSetServices: jest.fn(),
            query: "",
            setQuery: jest.fn(),
            })
        );

        renderWithProviders(<ServiceList/>);
        expect(screen.getByText(/Monitoring Service/i)).toBeInTheDocument();
    });


});