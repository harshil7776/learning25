import React from 'react'
import { Link } from 'react-router-dom';

export const NetflixMovies = () => {
    var movies = [
        { id: 101, name: "dhurandhar" },
        { id: 102, name: "kantara" },
        { id: 103, name: "laaaalo" },
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Movie List...</h1>
        {
            movies.map((movies)=>{
                return <li>
                    <Link to={'/watch/${movie.name}'}>{movies.name}</Link>
                </li>
            })
        }
    </div>
  )
}
