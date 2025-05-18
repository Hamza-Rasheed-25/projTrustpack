import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create PO',
        href: '/create',
    },
];
type CreateUserForm = {
    po_number: string;
};

export default function Create_PO() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<CreateUserForm>>({
        po_number: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('po.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create PO" />
            <div className="bg-background flex  flex-col items-center m-6 gap-6 p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col">
                        <div className="flex h-full flex-1 flex-col gap-2 rounded-xl ">
                            <div>
                                <h1 className="text-xl font-medium text-center">Create a New PO</h1>
                            </div>
                            <form className="flex flex-col" onSubmit={submit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="po_number">Purchase Order</Label>
                                        <Input
                                            id="po_number"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="po_number"
                                            value={data.po_number}
                                            onChange={(e) => setData('po_number', e.target.value)}
                                            disabled={processing}
                                            placeholder="PO Id"
                                        />
                                        <InputError message={errors.po_number} className="mt-2" />
                                    </div>

                                    <div>
                                        <Button type="submit" className="w-full" tabIndex={2} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Add a PO
                                        </Button>
                                        <Link href={route('po.index')}>
                                            <Button variant="destructive" className='w-full mt-2'>Cancel</Button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
