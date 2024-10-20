"use client"

const MyButton = () => {
    const Clickable = ()=>{
        alert("How are you");
    }
  return (
    <button onClick={Clickable} className="bg-red-500 text-green-500">Click me</button>
  )
}

export default MyButton