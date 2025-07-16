import { Sun,Moon } from "lucide-react";
import { useThemeStore } from "@/stores";
import styled from "@emotion/styled";

export default function ThemeToggle(){

    const {mode,toggleTheme} = useThemeStore();

    return(<>
        <ToggleWrapper onClick={toggleTheme}>
            {mode === 'light' ? <Moon size={28} strokeWidth={1.5}/> : <Sun size={28} strokeWidth={1.5}/> } 
        </ToggleWrapper>
    </>);
}

const ToggleWrapper = styled.div(({theme:{colors,spacing}})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'50%',
    width:spacing(12),
    height:spacing(12),
    cursor:'pointer',
    transition:'background-color 0.2s ease',
    ':hover':{
        background:colors.button.hover
    }
}));