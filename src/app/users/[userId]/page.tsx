import GetUser from "../../../../services/getUser";

export default async function UserId(props: {
    params: {
        userId: number
    }
}) {
    const userid = props.params.userId
    const userslist = await GetUser();
    const userData = userslist[userid-1];
    const {id,firstName} = userData;
    return (
        <div>
            <h1>User id : {id}</h1>
            <h1>Name : {firstName}</h1>
        </div>
    )
}

export async function generateStaticParams(){
    const userslist = await GetUser();
    return userslist.map((user:{id:number})=>({
        userId: user.id.toString()
    }))
}
