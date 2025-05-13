import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Panel',
        href: '/edit-user',
    },
];
type CreateUserForm = {
    name: string;
    email: string;
    role: string;
};

export default function Edit_user() {
    const { users } = usePage().props;
    console.log();
    const { data, setData, put, processing, errors} = useForm<Required<CreateUserForm>>({
        name: users.name || '',
        email: users.email || '',
        role:  '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('users.update', users.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />
            <div className="bg-background flex  flex-col items-center m-6 gap-6 p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col">
                        <div className="flex h-full flex-1 flex-col gap-2 rounded-xl ">
                            <div>
                                <h1 className="text-xl font-medium text-center">Edit the User Account</h1>
                                {/* <Link href={route('users.index')}>
                                    <Button>Back</Button>
                                </Link> */}
                            </div>
                            <form className="flex flex-col" onSubmit={submit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            disabled={processing}
                                            placeholder="Full name"
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            disabled={processing}
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Select required onValueChange={(value) => setData('role', value)} disabled={processing} value={data.role}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="printer">Printer</SelectItem>
                                                <SelectItem value="laminator">Laminator</SelectItem>
                                                <SelectItem value="slitter">Slitter</SelectItem>
                                                <SelectItem value="doctor">Doctor</SelectItem>
                                                <SelectItem value="mhs">MHS</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.role} />
                                    </div>

                                    <div>
                                        <Button type="submit" className="w-full" tabIndex={5} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Create account
                                        </Button>
                                        <Link href={route('users.index')}>
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
