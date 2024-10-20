import Link from "next/link";



export default function Layout({children}:{
    children:React.ReactNode;
}) {
  return (
    <div >
        <div className=' bg-gray-500 flex  flex-row items-center justify-center gap-4'>
            <h1 className="absolute left-0">Login Navbar</h1>
            <Link href={"/login"} className=" ">Login Main</Link>
            <Link href={"/login/loginstudent"} className=" ">Login STudent</Link>
            <Link href={"/login/loginteacher"} className=" ">Login Teacher</Link>
        </div>
        {children}
    </div>
  )
}
