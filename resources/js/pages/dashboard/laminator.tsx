import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laminator',
        href: '/laminator',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    Laminator Panel, Here you can manage your report.
                </div>
            </div>
        </AppLayout>
    );
}
