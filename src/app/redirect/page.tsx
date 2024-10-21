//redirect using redirect next library
import { redirect } from "next/navigation"

export default function Redirect() {
    redirect("/");
  return (
    <div>Redirect page</div>
  )
}
