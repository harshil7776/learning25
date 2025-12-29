import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="link" to="/netflixhome">
                                NetFlix Home
                            </Link>

                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/netflixshows">
                                NetFlix Shows
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/netflixmovies">
                                NetFlix Movies
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/useStateDemo">
                                useStateDemo
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/useStateDemo2">
                                UseStateDemo2
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
