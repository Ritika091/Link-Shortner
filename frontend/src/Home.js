import React, { useState } from 'react'
import './Home.css'
import {Scissors} from 'lucide-react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Home() {
  const [link,setLink]=useState();
  const [shorturl,setShorturl]=useState();
 const short=(link)=>{
  fetch(`https://link-shortener-00xh.onrender.com/shortner?u=${link}`,{
    method:"GET"
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    setShorturl(data.shorturl);
  })
  .catch((err) => console.error(err));
 }
  return (
    <div className='Home'>
        <h1>Link Shortener</h1>
        <p>Shorten the long links here!</p>
        <div className="Search">
            <input type="text" value={link} onChange={(e)=>{setLink(e.target.value)}}/>
            <Scissors className='icon' onClick={()=>{short(link)}} />
        </div>

         {shorturl &&
          <div className="Result">
            <h2>Your shorten link-</h2>
         <h2>{shorturl}</h2> 
          <CopyToClipboard text={shorturl}>
            <button onClick={() => alert("The URL has been copied")}>Copy</button>
          </CopyToClipboard>
        </div>
        }
        <div className="footer">
          <h2>Made with ❤️ by  <a className='underline' href='https://github.com/Ritika091' target='_blank'>Ritika091</a></h2>
        </div>
    </div>
  )
}
