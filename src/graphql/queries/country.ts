import {gql , useQuery} from '@apollo/client'
import type {CountryResponse,CountryVariables} from '../../types'


/**
 * GraphQL query for fetching detailed information about a single country by its code.
 */

 export const GET_COUNTRY = gql`
    query getCountry($code: ID!){
        country(code: $code){
            code
            name
            emoji
            continent{
                name
            }
        }
    }
`;

/**
 * Custom React hook for fetching country data based on ISO country code.
 * 
 * @param code - ISO country code (e.g., 'DE', 'US')
 * @returns useQuery result containing country data, loading, and error states
 */

export function useCountry(code:string){
    return useQuery<CountryResponse,CountryVariables>(GET_COUNTRY,{variables:{code}});
}