import { Head } from '@inertiajs/react';

export default function Test({ user }) {
    return (
        <div>
            <Head title="Welcome" />
            <h1>Welcome</h1>
            <p>Hello {user.name}, welcome to Inertia.</p>
        </div>
    )
}