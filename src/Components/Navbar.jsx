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
                                <br />   NetFlix Home
                            </Link>

                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/netflixshows">
                                NetFlix Shows
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/netflixmovies">
                                <br />
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
                                <br />
                                UseStateDemo2
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/bookstask1" >
                                Books
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/useStateDemo3" >
                                <br />
                                Use State Demo 3
                            </Link>
                        </li>
                        {/* <li class="nav-item active">
                            <Link class="link" to="/products" >
                                Products
                            </Link>
                        </li> */}
                      
                        {/* <li class="nav-item active">
                            <Link class="link" to="/products1" >
                                Products1
                            </Link>
                        </li> */}

                        <li class="nav-item active">
                            <Link class="link" to="/product2" >
                            Product
                            </Link>
                        </li>
                      
                        <li class="nav-item active">
                            <Link class="link" to="/inputdemo1" >
                            <br />
                            inputdemo1
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/inputdemo2" >
                            inputdemo2
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/dropdown" >
                            <br />
                            DropDown
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formdemo1" >
                            Formdemo
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formdemo2" >
                            <br />
                            Formdemo2
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
