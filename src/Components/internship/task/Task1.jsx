import React from 'react'
import { Link } from 'react-router-dom'

export const Task1 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>IPL TEAM</h1>
      <div>
        <ul>
          <li>
            <Link to={"/teamdetail/csk"}>CSK</Link>
          </li>
          <li>
            <Link to={"/teamdetail/mi"}>MI</Link>
          </li>
          <li>
            <Link to={"/teamdetail/rcb"}>RCB</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
