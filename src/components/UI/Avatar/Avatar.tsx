import styled from "@emotion/styled";
import user from "../../../assets/user.png"

interface AvatarProps{
    src?: string;
    alt?: string;
    size?: number;
}

export default function Avatar({src = user,alt = 'Avatar',size = 48}:AvatarProps){
    return <StyledAvatar src={src} alt={alt} size={size} />
};

const StyledAvatar = styled.img<{size:number}>(({size,theme:{colors}})=>({
    width:size,
    height:size,
    borderRadius:'50%',
    objectFit:'cover',
    border:`2px solid ${colors.border}`,
}))