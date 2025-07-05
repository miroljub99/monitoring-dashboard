import { type Service } from "../types";
import axios from "axios";

const api = "http://localhost:4000/services";

export async function fetchServices(){
    try {
        const response = await axios.get<Service[]>(api);
        return response.data;

    } catch (error) {
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
