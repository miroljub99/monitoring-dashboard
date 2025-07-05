import { type Service } from "../types";
import axios from "axios";

const api = "http://localhost:4000/services";


/**
 * Fetches the list of services from the REST API using Axios.
 * 
 * @returns An array of Service objects if the request is successful, or null in case of an error.
 */
export async function fetchServices(){
    try {
        const response = await axios.get<Service[]>(api);
        return response.data;

    } catch (error) {
        // Handle error specific to Axios
       if(axios.isAxiosError(error)){
        console.error("Axios error: ",error.message);
        if (error.response){
            console.error('Status: ',error.response.status);
            console.error('Data from server: ',error.response.data);
        }
       }else {
        console.error('Unknow error: ', error);
    };
        return null;
    }
}
