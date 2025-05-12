import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Shield, Printer, Sheet, Slice, Bandage, HandPlatter } from 'lucide-react';
import AppLogo from './app-logo';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];
const adminNavItems: NavItem[] = [
    {
        title: 'Admin Panel',
        href: '/users',
        icon: Shield,
    },
];
const printerNavItems: NavItem[] = [
    {
        title: 'Printer',
        href: '/printer',
        icon: Printer,
    },
];
const laminatorNavItems: NavItem[] = [
    {
        title: 'Laminator',
        href: '/laminator',
        icon: Sheet,
    },
];
const slitterNavItems: NavItem[] = [
    {
        title: 'Slitter',
        href: '/slitter',
        icon: Slice,
    },
];
const doctorNavItems: NavItem[] = [
    {
        title: 'Doctor',
        href: '/doctor',
        icon: Bandage,
    },
];
const mhsNavItems: NavItem[] = [
    {
        title: 'MHS',
        href: '/mhs',
        icon: HandPlatter,
    },
];


export function AppSidebar() {

let { auth } = usePage().props;
let userRole = auth?.user?.role || 'Admin';

let roleBasedNavItems = [...mainNavItems];

if (userRole === 'admin') {
    roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems, ...printerNavItems, ...laminatorNavItems, ...slitterNavItems, ...doctorNavItems, ...mhsNavItems];
} else if (userRole === 'printer') {
    roleBasedNavItems = [...roleBasedNavItems, ...printerNavItems];
} else if (userRole === 'laminator') {
    roleBasedNavItems = [...roleBasedNavItems, ...laminatorNavItems];
} else if (userRole === 'slitter') {
    roleBasedNavItems = [...roleBasedNavItems, ...slitterNavItems];
} else if (userRole === 'doctor') {
    roleBasedNavItems = [...roleBasedNavItems, ...doctorNavItems];
} else if (userRole === 'mhs') {
    roleBasedNavItems = [...roleBasedNavItems, ...mhsNavItems];
}

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
