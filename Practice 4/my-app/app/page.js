"use client"
import Image from "next/image";

export default function Home() {

const handleClick = async()=>{

  let data ={
    name: "Nilesh",
    role: "Coder"
  }

  let a = await fetch("/api/add" , {method: "POST", headers:{"Constent-type": "application/json",},
    body: JSON.stringify(data),
  })
  let res = await a.json()
  console.log(res)
}

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js api routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
