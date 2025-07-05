/**
 * Represents detailed information about a country, based on ISO code.
 */
export interface Country{
    code: string;  // ISO country code (e.g., 'DE')
    name:string;   // Full country name (e.g., 'Germany')
    emoji:string;  // Country flag emoji (e.g., '🇩🇪')
    continent:{
        name:string;  // Name of the continent (e.g., 'Europe')
    }

}

/**
 * Response structure for the getCountry GraphQL query.
 */
export interface CountryResponse{
    country: Country;
}

/**
 * Variables required for the getCountry GraphQL query.
 */
export interface CountryVariables{
    code:string; // ISO country code to fetch data for
}