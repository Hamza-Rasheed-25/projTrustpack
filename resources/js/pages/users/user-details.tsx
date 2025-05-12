import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Panel',
        href: '/user-details',
    },
];

export default function Admin_Panel() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Details" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div>
                    <Link
                        href={route('users.create')}
                        >
                            <Button>Create User</Button>
                    </Link>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 rtl:text-right dark:bg-zinc-900 dark:text-white">
                            Users List
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                Here you can manage all the users and their roles. Remove users, and assign roles to them.
                            </p>
                        </caption>
                        <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-zinc-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-zinc-900">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">Silver</td>
                                <td className="px-6 py-4">Laptop</td>
                                <td className="px-6 py-4">$2999</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500 px-3">
                                        Edit
                                    </a>
                                    <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-zinc-900">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">Black</td>
                                <td className="px-6 py-4">Accessories</td>
                                <td className="px-6 py-4">$99</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500 px-3">
                                        Edit
                                    </a>
                                    <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
