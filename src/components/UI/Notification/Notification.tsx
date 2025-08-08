import { useEffect,useRef } from "react";
import styled from "@emotion/styled";
import { Bell } from "lucide-react";
import { useState } from "react";

export default function Notification(){
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    function toggleNotif(){
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
        <Wrapper ref={menuRef}>
            <NotificationWrapper onClick={toggleNotif}>
                <Bell size={28} strokeWidth={1.5}/>
            </NotificationWrapper>
            {isOpen && <DropDownMenu>
                <span style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>Notification <span>Mark as read</span></span>
                <Divider/>
                <span>Notification text</span>
                <Divider/>
                <span>Notification text</span>
                <Divider/>
                <span>Notification text</span>
                <Divider/>
                <span>Notification text</span>
                <Divider/>
            </DropDownMenu>}
        </Wrapper>
    </>);
}

const NotificationWrapper = styled.div(({theme:{spacing,colors,shadow}})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'50%',
    width:spacing(12),
    height:spacing(12),
    cursor:'pointer',
    transition:'background-color 0.2s ease',
    ':hover':{
        background:colors.button.hover,
        boxShadow:shadow.md,
    }
}));

const Wrapper = styled.div(({})=>({
    position:'relative',
}));

export const DropDownMenu = styled.div(({theme:{spacing,colors,shadow}})=>({
    position:'absolute',
    top:`calc(100% + 8px)`,
    right:`10%`,
    display:'flex',
    flexDirection:'column',
    gap:spacing(5),
    minHeight:0,
    height:spacing(60),
    overflowX:'hidden',
    overflowY:'scroll',
    width:spacing(80),
    padding:`${spacing(5)}`,
    background:colors.surface,
    border:`1px solid ${colors.border}`,
    boxShadow: shadow.sm,
    zIndex:4,
}));

export const Divider = styled.div(({theme:{colors,spacing}})=>({
    width:'100%',
    height:spacing(0.5),
    background:colors.border,

}))