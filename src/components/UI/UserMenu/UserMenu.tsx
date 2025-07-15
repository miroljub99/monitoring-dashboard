import {Avatar,Paragraph} from '@/components';
import { UserWrapper } from './UserMenu.styled';
import { ChevronDown } from 'lucide-react';

export default function UserMenu(){
    
    return(<>
        <UserWrapper>
            <Avatar/>
            <Paragraph>Miroljub Radojkovic</Paragraph>
            <ChevronDown/>
        </UserWrapper>
        </>);
}