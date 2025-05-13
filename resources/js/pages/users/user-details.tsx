import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Panel',
        href: '/user-details',
    },
];

export default function Admin_Panel() {
    const { users } = usePage().props;
    const { delete: destroy } = useForm();

    const destroyPost: FormEventHandler = (e, id) => {
        e.preventDefault();
        if(confirm('Are you sure you want to delete this user?')) {
            destroy(route('users.destroy', id));
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Details" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div>
                    <Link href={route('users.create')}>
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
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, name, email, role }) => (
                                <tr key={id} className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-zinc-900">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {name}
                                    </th>
                                    <td className="px-6 py-4">{email}</td>
                                    <td className="px-6 py-4">{role}</td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4 text-right">
                                        <form onSubmit={(e) => destroyPost(e, id)}>
                                            <Link href={route('users.edit', id)}>
                                                <a href="#" className="px-3 font-medium text-blue-600 hover:underline dark:text-blue-500">
                                                    Edit
                                                </a>
                                            </Link>
                                            <Button variant="link" className="font-medium text-red-600 hover:underline dark:text-red-500">
                                                    Delete
                                            </Button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
