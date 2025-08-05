import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ServiceCard from './ServiceCard';
import {mockCardProps} from '../../_mocks_/serviceCardMock';
import { renderWithProviders } from '@/test-utils';

describe('ServiceCard',()=>{
    it('renders service name, status and country code',()=>{
         renderWithProviders(<ServiceCard {...mockCardProps}/>);

         expect(screen.getByText(/Monitoring Service/i)).toBeInTheDocument();
         expect(screen.getByText(/Online/)).toBeInTheDocument(); // StatusBadge
         expect(screen.getByText(/US/)).toBeInTheDocument(); // countryCode
    });

    it('renders metric values',()=>{
         renderWithProviders(<ServiceCard {...mockCardProps}/>);

         expect(screen.getByText(/45/)).toBeInTheDocument();
         expect(screen.getByText(/2048/)).toBeInTheDocument();
         expect(screen.getByText(/1.2/)).toBeInTheDocument();
         expect(screen.getByText(/99.99/)).toBeInTheDocument();
         expect(screen.getByText(/200/)).toBeInTheDocument();
         expect(screen.getByText(/0 err/)).toBeInTheDocument();
    });

});