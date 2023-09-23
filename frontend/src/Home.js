import React from 'react'
import './Home.css'
import {Scissors} from 'lucide-react'
export default function Home() {
  return (
    <div className='Home'>
        <h1>Link Shortener</h1>
        <p>Shorten the long links here!</p>
        <div className="Search">
            <input type="text" />
            <Scissors className='icon' />
        </div>
        <div className="Result">
            <h2>Shorten Link- </h2>
            <h2>hhtptpppp</h2>
        </div>
    </div>
  )
}
