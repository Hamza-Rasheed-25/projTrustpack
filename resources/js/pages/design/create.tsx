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
        title: 'Create Design',
        href: '/create',
    },
];
type CreateUserForm = {
    design_id: string;
    design_name: string;
};

export default function Create_Design() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<CreateUserForm>>({
        design_id: '',
        design_name: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('design.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Design" />
            <div className="bg-background flex  flex-col items-center m-6 gap-6 p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col">
                        <div className="flex h-full flex-1 flex-col gap-2 rounded-xl ">
                            <div>
                                <h1 className="text-xl font-medium text-center">Add a New Design</h1>
                            </div>
                            <form className="flex flex-col" onSubmit={submit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="design_id">Design Id</Label>
                                        <Input
                                            id="design_id"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="design_id"
                                            value={data.design_id}
                                            onChange={(e) => setData('design_id', e.target.value)}
                                            disabled={processing}
                                            placeholder="Design Id"
                                        />
                                        <InputError message={errors.design_id} className="mt-2" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="design_name">Design Name</Label>
                                        <Input
                                            id="design_name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={2}
                                            autoComplete="design_name"
                                            value={data.design_name}
                                            onChange={(e) => setData('design_name', e.target.value)}
                                            disabled={processing}
                                            placeholder="Design Name"
                                        />
                                        <InputError message={errors.design_name} className="mt-2" />
                                    </div>

                                    <div>
                                        <Button type="submit" className="w-full" tabIndex={3} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Add a Design
                                        </Button>
                                        <Link href={route('design.index')}>
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
