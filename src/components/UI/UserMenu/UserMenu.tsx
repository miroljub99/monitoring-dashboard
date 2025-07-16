import {Avatar,Paragraph} from '@/components';
import { Divider, DropDownMenu, UserWrapper } from './UserMenu.styled';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function UserMenu(){

    const [isOpen,setIsOpen] = useState<boolean>();

    function toggleMenu(){
        setIsOpen(prev => !prev);
    }

    return(<>
        <UserWrapper onClick={toggleMenu}>
            <Avatar/>
            <Paragraph>Miroljub Radojkovic</Paragraph>
            {isOpen ? <ChevronUp/>:<ChevronDown/>}
            {isOpen && <DropDownMenu>
                <span>My Profile</span>
                <span>Profile Settings</span>
                <Divider/>
                <span>Log Out</span>
            </DropDownMenu>}
            
        </UserWrapper>
        
        </>);
}