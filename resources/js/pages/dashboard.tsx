import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import {UserName} from '@/components/user-name';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    let { auth } = usePage().props;
    let userRole = auth?.user?.role;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Welcome to {capitalize(userRole)} Dashboard, <UserName user={auth.user} />!
                </div>
            </div>
        </AppLayout>
    );
}
