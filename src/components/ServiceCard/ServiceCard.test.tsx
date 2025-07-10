import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ServiceCard from './ServiceCard';
import {mockCardProps} from '../../_mocks_/serviceCardMock';




describe('ServiceCard',()=>{
    it('renders service name, status and country code',()=>{});
         render(<ServiceCard {...mockCardProps}/>);

         expect(screen.getByText(/Monitoring Service/i)).toBeInTheDocument();
         expect(screen.getByText(/Online/)).toBeInTheDocument(); // StatusBadge
         expect(screen.getByText(/US/)).toBeInTheDocument(); // countryCode

    it('renders metric values',()=>{
         render(<ServiceCard {...mockCardProps} />);

         expect(screen.getByText(/CPU:45/)).toBeInTheDocument();
         expect(screen.getByText(/Memory:2048/)).toBeInTheDocument();
         expect(screen.getByText(/Load:1.2/)).toBeInTheDocument();
         expect(screen.getByText(/Up Time:99.99/)).toBeInTheDocument();
         expect(screen.getByText(/Response time:200/)).toBeInTheDocument();
         expect(screen.getByText(/Errors:0/)).toBeInTheDocument();
    });

    it('calls onClick when card is clicked (if defined)',()=>{
        render(<ServiceCard {...mockCardProps} />);
        const card = screen.getByTestId('service-card');

        fireEvent.click(card);

        expect(mockCardProps.onClick).toHaveBeenCalled();
    });
});