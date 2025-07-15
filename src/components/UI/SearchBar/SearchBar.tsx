import { InputWrapper,IconWrapper,StyledInput } from "./SearchBar.styled";
import {Search as SearchIcon} from 'lucide-react';

export default function SearchBar(){
    return(<>
        <InputWrapper>
            <IconWrapper>
                <SearchIcon size={20} strokeWidth={1.5}/>
            </IconWrapper>
            <StyledInput type="text" placeholder="Search..." />
        </InputWrapper>
    </>);
}