import { type User } from '@/types';

export function UserName({ user }: { user: User }) {
    return (
        <>
            {user.name.split(' ')[0]}
        </>
    );
}