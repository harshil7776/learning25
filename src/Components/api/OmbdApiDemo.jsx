import axios from 'axios'
import React, { useState } from 'react'

export const OmbdApiDemo = () => {

    const [movies, setmovies] = useState([])
    const [movieName, setmovieName] = useState("")

    const getMovieData = async () => {

        const res = await axios.get(`https://www.omdbapi.com/?apikey=ee395415&s=${movieName}`)
        console.log(res)
        console.log(res.data)
        console.log(res.data.Search)
        setmovies(res.data.Search)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Ombd Api Demo</h1>
        <input type='text' value={movieName} onChange={(mov)=>setmovieName(mov.target.value)}></input>
        <button onClick={getMovieData}>GEt</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <td>IMDB ID</td>
                    <td>TITLE</td>
                    <td>YEAR</td>
                    <td>TYPE</td>
                    <td>POSTER</td>
                </tr>
            </thead>
            <tbody>
                {
                    movies?.map((movie)=>{
                        return <tr>
                            <td>{movie.imdbID}</td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.Type}</td>
                            <td>
                                <img src={movie.Poster} style={{height:"70px", width:"70px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
