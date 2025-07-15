import type { Item } from "@/types";
import { Home,LayoutDashboard, Server,HelpCircle,Settings } from "lucide-react";
/**
 * Static configuration for sidebar navigation.
 * - `sideBarItemTop` defines main routes like Home, Dashboard, and a collapsible Services item.
 * - `sideBarItemBottom` defines secondary routes like Support and Settings.
 * 
 * The 'Services' item is collapsible and dynamically populated with service data from the store.
 */

export const sideBarItemTop: Item[] = [
    {label:'Home', route:'/', icon: Home},
    {label:'Dashboard',route:'/dashboard', icon: LayoutDashboard},
    {label:'Services', icon: Server, collapsible:true},
];

export const sideBarItemBottom: Item[] = [
    {label:'Support', route:'/support', icon: HelpCircle},
    {label:'Settings', route:'/settings', icon: Settings}
];
