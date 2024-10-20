'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login=()=>{
    const router = useRouter();

    const navigation=()=>{
        router.back();
    }

    const navigationforward = (pagename:string)=>{
        router.push("/login/"+pagename)
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl">Login page</h1>
            <Link href={'/'}>Go to Home Page</Link>
            <button className="border border-white bg-red-400" onClick={()=>navigationforward("loginstudent")}>Go to Login Student Page</button>
            <button className="bg-red-500" onClick={()=>navigationforward("loginteacher")}>Go to Login Teacher Page</button>
            
            <button className="bg-black text-white" onClick={navigation}> Go to back page</button>
        </div>
    )
}
export default Login;