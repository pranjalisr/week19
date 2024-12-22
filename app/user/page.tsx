  // Data fetching
  // useEffect should run on client
  //To prettify: add async, remove useEffect and add const response = await axios.get
  // not using UseEffect or component makes it a SSR
  //rendering = when gets called HTML of page should get called
  
  import axios from "axios";



 export default async function User() {
   const response = await axios.get("http://localhost:3000/api/vi/user/details")
   
   await new Promise(r => setTimeout(r, 5000));


   const data = response.data;
   console.log("Hi");
     
    
    return <div>
        User page
        {data.name}
        {data.email}

    </div>
}