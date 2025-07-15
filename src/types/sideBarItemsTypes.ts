import type {LucideIcon} from 'lucide-react';

/** Represent the item for sideBar  */
export interface Item{
    label: string;
    route?: string;
    icon: LucideIcon;
    collapsible?: boolean;
}