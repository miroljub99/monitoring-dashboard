import { Service } from "@/types";
import { SideBarWrapper,
         LogoWrapper,
         NavWrapper,
         SideTopWrapper,
         SideBottomWrapper } from "./SideBar.styled";
import { sideBarItemTop,sideBarItemBottom } from "./sideBarItems";
import {NavButton} from "@/components";
import { useServicesStore } from "@/stores";
import {Heading2} from '@/components';
import { Proportions,type LucideIcon } from "lucide-react";


export default function SideBar(){
    const services = useServicesStore<Service[]>(state => state.services);
    const Logo: LucideIcon = Proportions;

    return(<>
        <SideBarWrapper>
            <LogoWrapper>
                <Logo size={36}/>
               <Heading2>Monitoring</Heading2>
            </LogoWrapper>
            <NavWrapper>
                <SideTopWrapper>
                    {sideBarItemTop.map(item =>(
                        <NavButton label={item.label}
                                   icon={item.icon}
                                   collapsible={item.collapsible || false}
                                   listItem={item.collapsible ? services : []}
                                   route={item.route}
                        />
                    ))}
                </SideTopWrapper>
                <SideBottomWrapper>
                    {sideBarItemBottom.map(item=>(
                        <NavButton label={item.label} icon={item.icon} listItem={item.collapsible ? services : []} route={item.route}/>
                    ))}
                </SideBottomWrapper>
            </NavWrapper>
        </SideBarWrapper>
    </>);
}