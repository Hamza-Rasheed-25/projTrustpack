import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Rolls Reels',
        href: '/rr',
    },
];

export default function Rolls_Reels() {
    const { rr } = usePage().props;
    const { delete: destroy } = useForm();

    const destroyPost: FormEventHandler = (e, id) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this RR?')) {
            destroy(route('rr.destroy', id));
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Rolls Reels" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 rtl:text-right dark:bg-zinc-900 dark:text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    Rolls-Reels Design List
                                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Here you can manage all the Rolls-Reels Design Pivot.
                                    </p>
                                </div>
                                <div>
                                    <Link href={route('rr.create')}>
                                        <Button>Issue a New Rolls Reels Design Pivot</Button>
                                    </Link>
                                </div>
                            </div>
                        </caption>
                        <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-zinc-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    PO Number
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Roll Number
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    No. of Reels
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    1st Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    2nd Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    3rd Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    4th Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    5th Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    6th Reel
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    7th Reel
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rr.map(({id, po_number, roll_number, number_of_reels, reel_design_1, reel_design_2, reel_design_3, reel_design_4, reel_design_5, reel_design_6, reel_design_7}) => (
                                <tr key={id} className="bg-white dark:bg-zinc-900">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {po_number}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {roll_number}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {number_of_reels}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_1}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_2}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_3}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_4}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_5}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_6}
                                    </th>
                                    <th scope="row" className="px-2 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        {reel_design_7}
                                    </th>
                                    
                                    <td className="px-6 py-4 text-right">
                                        <form onSubmit={(e) => destroyPost(e, id)}>
                                            <Link href={route('rr.edit', id)}>
                                            
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
