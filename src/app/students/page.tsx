

import Link from "next/link"
const studentList = [
    {
        id:1,
        name:'ganesh'
    },
    {
        id:2,
        name:'vikash'
    },
    {
        id:3,
        name:'rahul'
    },
    {
        id:4,
        name:'jainath'
    },

]

export default function Students() {

    return (
        <div className="flex flex-col gap-4 ">
            {studentList.map((student)=>(
                <Link href={`/students/${student.name}`} key={student.id} className="text-center font-semibold">{student.name}</Link>
            ))
            }
            
        </div>
    )
}
