import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    size?:'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}

const paddingMap = {
    sm: '4px 8px',
    md: '8px 12px',
    lg: '12px 16px',
}


export default function Button(props:ButtonProps){
    const {size='md',children,...rest} = props;
    const padding = paddingMap[size];
    return(<>
        <ButtonWrapper padding={padding} {...rest}>
            {children}
        </ButtonWrapper>
    </>);
}

const ButtonWrapper = styled.button<{padding: string}>(({theme:{colors,font},padding})=>({
    maxHeight: 'fit-content',                           
    alignSelf: 'flex-start',   
    padding:padding,
    color: colors.button.text,
    fontFamily: font.family,
    fontSize: font.size.paragraph,
    fontWeight: font.weight.bold,
    background: colors.button.background,
    whiteSpace: 'nowrap',
    cursor:'pointer',
    transition: `background-color 0.2s ease`,
    '&: hover':{
        background: colors.button.hover
    },
    '&: disable':{
        background: colors.button.disabledBg,
        color: colors.button.disabledText,
        cursor:'not-allowed',
    }
}));
