import { InputWrapper,IconWrapper,StyledInput } from "./SearchBar.styled";
import {Search as SearchIcon} from 'lucide-react';
import {useEffect,useState} from 'react';
import { useServicesStore } from "@/stores";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar(){

    const [localQuery,setLocalQuery] = useState<string>('');
    const location = useLocation();
    const setQuery = useServicesStore(state => state.setQuery);
    const navigate = useNavigate();

    useEffect(() => {
        const isSearchRelevant = location.pathname === '/dashboard';
            if (!isSearchRelevant) {
                setLocalQuery('');
                setQuery('');
            }
    }, [location.pathname]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalQuery(value);       
        setQuery(value);            
        if (location.pathname !== '/dashboard') {
            navigate('/dashboard'); 
        }
    };

    return(<>
        <InputWrapper>
            <IconWrapper>
                <SearchIcon size={20} strokeWidth={1.5}/>
            </IconWrapper>
            <StyledInput type="text" value={localQuery} placeholder="Search..." onChange={handleChange} />
        </InputWrapper>
    </>);
}