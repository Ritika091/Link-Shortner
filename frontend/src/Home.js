import React, { useState } from 'react'
import './Home.css'
import {Scissors} from 'lucide-react'
export default function Home() {
  const [link,setLink]=useState();
  const [shorturl,setShorturl]=useState("");
  const short=()=>{
   fetch(`http://localhost:5000/${id}`,{
    // method:"GET",
    // body:JSON.stringify({
    //   id:id
    // })
   }).then(res=>res.json())
   setLink(res.json().result.full_short_link)
  //  .then((result)=>{
  //   console.log(result);
  //  })
   .catch(err=>console.log(err))
  }
  return (
    <div className='Home'>
        <h1>Link Shortener</h1>
        <p>Shorten the long links here!</p>
        <div className="Search">
            <input type="text" value={link} onChange={(e)=>{setLink(e.target.value)}}/>
            <button onClick={()=>{short(link)}}>
            <Scissors className='icon' />
            </button>
        </div>
        <div className="Result">
            <h2>Shorten Link- </h2>
            <h2>{shorturl}</h2>
        </div>
    </div>
  )
}
