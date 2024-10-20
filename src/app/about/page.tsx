'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About=()=>{
    const router = useRouter();
    const navigation=()=>{
        router.back();
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl">About page</h1>
            <Link href={'/'}>Go to Home Page</Link>
            <Link href={'/about/aboutstudent'}>Go to About Student Page</Link>
            <Link href={'/about/aboutcollege'}>Go to About College Page</Link>
            <button className="bg-black dark:bg-white text-white dark:text-black" onClick={navigation}> Go to back page</button>
        </div>
    )
}
export default About;