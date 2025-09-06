import { useEffect,useRef } from 'react';
import {Avatar,Paragraph} from '@/components';
import { Divider, DropDownMenu, UserWrapper, Wrapper } from './UserMenu.styled';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function UserMenu(){

    const [isOpen,setIsOpen] = useState<boolean>();
    const menuRef = useRef<HTMLDivElement>(null);

    function toggleMenu(){
        setIsOpen(prev => !prev);
    };
    
    //Check if is clicked outside and set isOpen false
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(<>
        <Wrapper ref={menuRef} >
            <UserWrapper onClick={toggleMenu} >
                <Avatar/>
                <Paragraph >Miroljub Radojkovic</Paragraph>
                {isOpen ? <ChevronUp/>:<ChevronDown/>}
            </UserWrapper>
            {isOpen && <DropDownMenu >
                <span>My Profile</span>
                <span>Profile Settings</span>
                <Divider/>
                <span>Log Out</span>
            </DropDownMenu>}
        </Wrapper>
        </>);
}