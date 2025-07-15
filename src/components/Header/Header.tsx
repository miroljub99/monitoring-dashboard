import { HeaderWrapper,LeftSection,RightSection } from "./Header.styled";
import {SearchBar,UserMenu,Notification, ThemeToggle} from '@/components';

export default function Header(){
    return(<>
        <HeaderWrapper>
            <LeftSection>
                <SearchBar/>
            </LeftSection>
            <RightSection>
                <ThemeToggle/>
                <Notification/>
                <UserMenu/>
            </RightSection>
        </HeaderWrapper>
    </>);
}