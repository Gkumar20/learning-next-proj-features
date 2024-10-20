"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Layout({ children }: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    return (
        <div>
            <h1>Navigate About Page</h1>
            {pathname != "/about/aboutcollege" ?
                <div className='flex items-center justify-center gap-8'>
                    <Link href={"/about"}> About</Link>
                    <Link href={"/about/aboutstudent"}> Student About</Link>
                    <Link href={"/about/aboutcollege"}>  College About</Link>
                </div> : <Link href="/about" >Go to Main About Page</Link>
            }
            <div>{children}</div>

        </div>
    )
}
