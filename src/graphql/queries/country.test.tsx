import {renderHook,waitFor} from '@testing-library/react';
import {MockedProvider} from '@apollo/client/testing';
import { useCountry, GET_COUNTRY } from './country';

//First we made a fake request and result for apollo
const mockCountry = {
  code: 'DE',
  name: 'Germany',
  emoji: '🇩🇪',
  continent: { name: 'Europe' }
};

const mocks = [
  {
    request: {
      query: GET_COUNTRY,
      variables: { code: 'DE' }
    },
    result: {
      data: {
        country: mockCountry
      }
    }
  }
];

describe('useCountry hook',()=>{
    it('should fetch and return country data successfully',async ()=>{
         const { result } = renderHook(() => useCountry('DE'), {
                wrapper: ({ children }) => (
                    <MockedProvider mocks={mocks} addTypename={false}>
                    {children}
                    </MockedProvider>
                )
                });

         expect(result.current.loading).toBe(true);

         await waitFor(()=>{
            expect(result.current.loading).toBe(false);
         });

         expect(result.current.data?.country).toEqual(mockCountry);
         expect(result.current.error).toBeUndefined();
    });
});