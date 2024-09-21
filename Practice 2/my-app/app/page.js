// "use client"
// import { useState,useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"
export default function Home() {
  // const [count, setcount] = useState(0);
  console.log("Hey i am Nilesh")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
    <div>
    <Navbar />
      I am Component 
      {/* {count} */}
      {/* <button onClick={()=> setcount(count+1)}>ADD</button> */}
    </div>
  );
}
