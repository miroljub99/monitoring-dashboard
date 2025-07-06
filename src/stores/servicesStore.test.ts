import {useServicesStore} from './servicesStore';
import {mockService} from '../_mocks_/servicesMocks';
import { act } from 'react-dom/test-utils';
import * as api from '../api';

jest.mock('../api');

describe('Services Store - basic state management ',()=>{

    it('should have empty initial state',()=>{

        expect(useServicesStore.getState().services).toEqual([]);
        expect(useServicesStore.getState().loading).toBe(false);
        expect(useServicesStore.getState().error).toBe(null);
    });

    it('should set services list',()=>{
        act(()=>{
            useServicesStore.getState().setServices([mockService]);
        });

        expect(useServicesStore.getState().services).toEqual([mockService]);
    });

    it('should set loading state',()=>{
        act(()=>{
            useServicesStore.getState().setLoading(true);
        });
        expect(useServicesStore.getState().loading).toBe(true);
    });

    it('should set error state',()=>{
        act(()=>{
            useServicesStore.getState().setError('Test Error');
        });
        expect(useServicesStore.getState().error).toBe('Test Error');
    });
});

describe('Services Store - fetchAndSetServices',()=>{
 beforeEach(() => {
        // Ovde postaviš mock da vraća uspešan odgovor
        useServicesStore.setState({
        services: [],
        loading: false,
        error: null
    });
    
        (api.fetchServices as jest.Mock).mockResolvedValue([mockService]);
    });

    it('should fetch and set services successfully', async () => {
      
        await act(async()=>{
           await useServicesStore.getState().fetchAndSetServices();
        });

        let state = useServicesStore.getState()

        expect(state.services).toEqual([mockService]);
        expect(state.loading).toBeFalsy();
        expect(state.error).toBeNull();
    });

    it('should handle API failure', async () => {
    
        (api.fetchServices as jest.Mock).mockRejectedValue(new Error('API Fail'));

        await act(async()=>{
            await useServicesStore.getState().fetchAndSetServices();
        });

        let state = useServicesStore.getState();
        
        expect(state.services).toEqual([]);
        expect(state.loading).toBeFalsy();
        expect(state.error).toBe('Failed to fetch services');
    });
});