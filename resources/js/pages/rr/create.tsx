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
        title: 'Create RR',
        href: '/create',
    },
];
type CreateUserForm = {
    po_number: string;
    roll_number: string;
    number_of_reels: string;
    reel_design_1: string;
    reel_design_2: string;
    reel_design_3: string;
    reel_design_4: string;
    reel_design_5: string;
    reel_design_6: string;
    reel_design_7: string;
};

export default function Create_PO() {
    const { Design } = usePage().props;
    const { po } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<CreateUserForm>>({
        po_number: '',
        roll_number: '',
        number_of_reels: '',
        reel_design_1: 'empty',
        reel_design_2: 'empty',
        reel_design_3: 'empty',
        reel_design_4: 'empty',
        reel_design_5: 'empty',
        reel_design_6: 'empty',
        reel_design_7: 'empty',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('rr.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create PO" />
            <div className="bg-background m-6 flex flex-col items-center gap-6 p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col">
                        <div className="flex h-full flex-1 flex-col gap-2 rounded-xl">
                            <div>
                                <h1 className="text-center text-xl font-medium">Create a New RR</h1>
                            </div>
                            <form className="flex flex-col" onSubmit={submit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">Purchase Order Id</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('po_number', value)}
                                            disabled={processing}
                                            value={data.po_number}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Purchase Order Id" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {po.map(({ po_number }) => (
                                                    <SelectItem value={po_number}>{po_number}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.po_number} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="roll_number">Roll Number</Label>
                                        <Input
                                            id="roll_number"
                                            type="number"
                                            required
                                            autoFocus
                                            tabIndex={2}
                                            autoComplete="roll_number"
                                            value={data.roll_number}
                                            onChange={(e) => setData('roll_number', e.target.value)}
                                            disabled={processing}
                                            placeholder="Roll Number"
                                        />
                                        <InputError message={errors.roll_number} className="mt-2" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="number_of_reels">number_of_reels</Label>
                                        <Select required onValueChange={(value) => setData('number_of_reels', value)} disabled={processing} value={data.number_of_reels}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a Number of Reels" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                                <SelectItem value="4">4</SelectItem>
                                                <SelectItem value="5">5</SelectItem>
                                                <SelectItem value="6">6</SelectItem>
                                                <SelectItem value="7">7</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.number_of_reels} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">1st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_1', value)}
                                            disabled={processing}
                                            value={data.reel_design_1}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_1} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">2st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_2', value)}
                                            disabled={processing}
                                            value={data.reel_design_2}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_2} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">3st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_3', value)}
                                            disabled={processing}
                                            value={data.reel_design_3}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_3} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">4st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_4', value)}
                                            disabled={processing}
                                            value={data.reel_design_4}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_4} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">5st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_5', value)}
                                            disabled={processing}
                                            value={data.reel_design_5}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_5} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">6st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_6', value)}
                                            disabled={processing}
                                            value={data.reel_design_6}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_6} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="role">7st Reel Design</Label>
                                        <Select
                                            required
                                            onValueChange={(value) => setData('reel_design_7', value)}
                                            disabled={processing}
                                            value={data.reel_design_7}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Design" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Design.map(({ design_name }) => (
                                                    <SelectItem value={design_name}>{design_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.reel_design_7} />
                                    </div>

                                    <div>
                                        <Button type="submit" className="w-full" tabIndex={4} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Add a RR
                                        </Button>
                                        <Link href={route('rr.index')}>
                                            <Button variant="destructive" className="mt-2 w-full">
                                                Cancel
                                            </Button>
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
