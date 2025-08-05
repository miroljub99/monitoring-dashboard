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

const ButtonWrapper = styled.button<{padding: string}>(({theme:{colors,font,shadow},padding})=>({
    maxHeight: 'fit-content',                           
    alignSelf: 'center',   
    padding:padding,
    color: colors.button.text,
    fontFamily: font.family,
    fontSize: font.size.paragraph,
    fontWeight: font.weight.bold,
    background: colors.button.background,
    whiteSpace: 'nowrap',
    cursor:'pointer',
    transition: `background-color 0.2s ease`,
    boxShadow:shadow.sm,
    '&: hover':{
        background: colors.button.hoverBtn,
        boxShadow:shadow.sm,
    },
    '&: disable':{
        background: colors.button.disabledBg,
        color: colors.button.disabledText,
        cursor:'not-allowed',
    }
}));
