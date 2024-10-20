'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const router = useRouter();

  const navigation = (pathname:string)=>{
      router.push(pathname);
  }
  
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center ">
      <Comp name="ganesh" />

      {/* linking */}
      <Link href={"/about"}>Go to About Page</Link>
      <br />
      <Link href={"/login"}>Go to Login Page</Link>
      <br />
      <br />
      <Link href={"/productlist"}>Go to ProductList Page using client component</Link>
      <br />
      <br />
      <Link href={"/productlist1"}>Go to ProductList Page using Server Component</Link>
      <br />
      <br />
      <Link href={"/image"}>Go to Image Page</Link>
      <br />
      <br />
      <Link href={"/userlocation"}>Go to User Location Page</Link>
      <br />

      {/* navigation */}
      <button className="bg-black text-white" onClick={()=>navigation("/about")}> Go to about page</button>
      <br/>
      <button className="bg-black text-white" onClick={()=>navigation("/login")}> Go to login page</button>
    </div>
  )
}


//inner component
const Comp = (props: {
  name: string
}) => {
  console.log(props.name)
  const [name, setName] = useState("rahul");

  const clicker = () => {
    // alert(name)
    setName("mridul")
  }
  return (
    <div>
      <h1 className="text-4xl">{name}</h1>
      <button onClick={() => clicker()}>click me</button>
    </div>
  )
}
