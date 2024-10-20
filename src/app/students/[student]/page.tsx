
export default function Student({params}:{
    params:{
      student:string
    }
}) {
  console.log(params.student)
  return (
    <div>id is :{params.student}</div>
  )
}
