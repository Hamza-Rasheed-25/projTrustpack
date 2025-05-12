import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Panel',
        href: '/admin-panel',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Admin Panel, Here you can manage all the users and their roles. Add or remove users, and assign roles to them.
                </div>
            </div>
        </AppLayout>
    );
}
