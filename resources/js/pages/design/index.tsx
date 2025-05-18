import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Design',
        href: '/design',
    },
];

export default function Design() {
    const { Design } = usePage().props;
    const { delete: destroy } = useForm();

    const destroyPost: FormEventHandler = (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this Design?')) {
            destroy(route('design.destroy', id));
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Design" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 rtl:text-right dark:bg-zinc-900 dark:text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    Design List
                                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Here you can manage all the Design.
                                    </p>
                                </div>
                                <div>
                                    <Link href={route('design.create')}>
                                        <Button>Add a new Design</Button>
                                    </Link>
                                </div>
                            </div>
                        </caption>
                        <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-zinc-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Design Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Design Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Design.map(({id, design_id, design_name}) => (
                                <tr key={id} className="bg-white dark:bg-zinc-900">
                                    <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {design_id}
                                    </th>
                                    <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {design_name}
                                    </th>
                                    <td className="px-6 py-4 text-right">
                                        <form onSubmit={(e) => destroyPost(e, id)}>
                                            <Link href={route('design.edit', id)}>
                                            
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
