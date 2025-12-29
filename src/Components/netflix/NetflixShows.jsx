import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Shows</h1>
        <div>
            <ul>
              <li>
                <Link to = "/watch">Money Heist</Link>
              </li>
              <li>
                <Link to="/watch">Breaking Bad</Link>
              </li>
              <li>
                <Link to="/watch">Dhurandar</Link>
              </li>


              <li>
                <Link to = "/watch/money_heist">Money Heist</Link>
              </li>
              <li>
                <Link to="/watch/1007">Breaking Bad</Link>
              </li>
              <li>
                <Link to="/watch/dhurn10010">Dhurandar</Link>
              </li>
              
            </ul>
        </div>

    </div>
  )
}
