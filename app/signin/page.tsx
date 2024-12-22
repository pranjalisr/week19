// onclick handler should be converted to client component

"use client"
import axios from "axios"
export default function Signin() {

    function setUsername(value: string) {
        throw new Error("Function not implemented.");
    }

 return <div className="w-screen h-screen flex justify-center items-center">
    <div className="border p-2">
        <input type="text" placeholder="username" onChange={e => {
            setUsername(e.target.value);
        }}></input>
        <input type="password" placeholder="password" onChange={e => {
            setUsername(e.target.value);
        }}></input>
    
        <button onClick={() =>{
      axios.post("http://localhost:3000/api/v1/signin")

        }}>Sign in</button>
    
    
    </div>
 </div>


}