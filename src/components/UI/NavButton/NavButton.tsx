import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown,ChevronUp } from "lucide-react";
import { ButtonWrapper,ContentWrapper } from "./NavButton.styled";
import { Service } from "@/types";
import { useNavigate } from "react-router-dom";

interface NavButtonProps{
    label: string;
    route?: string;
    icon: LucideIcon;
    collapsible?: boolean;
    listItem?: unknown[];
}

const statusMap = {
  online: { color: 'green', emoji: '\u{1F7E2}', label: 'Online' },
  offline: { color: 'red', emoji: '\u{1F534}', label: 'Offline' },
  degraded: { color: 'orange', emoji: '\u{1F7E0}', label: 'Degraded' },
};

/**
 * NavButton is a sidebar navigation item.
 * It can be a simple link or a collapsible button with a sublist.
 */
export default function NavButton(props:NavButtonProps){
    const {label,route,icon,collapsible,listItem = []} = props;
    const Icon = icon;
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null); 

    function handleClick(){
        if(collapsible){
            setIsOpen(isOpen => !isOpen);
        }
        if(route){
            navigate(route);
        }
    }

    function handeListClick(id: string){

        navigate(`/service/${id}`);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            }
        };

        // Dodaj true kao treći argument (capture faza)
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return(<>
        <div ref={menuRef}>
            <ButtonWrapper onClick={handleClick}>
                <Icon size={32} strokeWidth={1}/><span>{label}</span>{collapsible && (isOpen ? <ChevronUp size={18}/>:<ChevronDown size={18}/>)}
            </ButtonWrapper>
            {collapsible && (
                <ContentWrapper isOpen={isOpen}>
                    {(listItem as Service[]).map(item =>(
                        <ButtonWrapper onClick={()=> handeListClick(item.id)}><span>{item.name}</span>{statusMap[item.status].emoji}</ButtonWrapper>
                    ))}
                </ContentWrapper>
            )}
        </div>
    </>);
}