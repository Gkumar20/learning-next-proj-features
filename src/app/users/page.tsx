// pages/users/page.tsx
import Link from "next/link";
import GetUser from "../../../services/getUser";

export default async function Users() {
    const userslist = await GetUser();
    // console.log(userslist)

    return (
        <div>
            {userslist.length}
            {userslist.map((user: { id: number; firstName: string }) => (
                <h1 key={user.id}>
                    <Link href={`users/${user.id}`}>
                        {user.firstName}
                    </Link>
                </h1>
            ))}

        </div>
    );
}
