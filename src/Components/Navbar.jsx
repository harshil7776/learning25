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
                        {/* <li class="nav-item active">
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
                        </li> */}
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

                        {/* <li class="nav-item active">
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
                            Formdemo1
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formdemo2" >
                            <br />
                            Formdemo2
                            </Link>
                        </li> */}

                        <li class="nav-item active">
                            <Link class="link" to="/formdemo5" >
                                <br />
                                Formdemo5
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formdemo6" >
                                Formdemo6
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formdemo7" >
                                <br />
                                Formdemo7
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formtask1" >
                                FormTask1
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/iplteam" >
                                <br />
                                Task1
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formtask8" >
                                FormTask8
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formtask2watch" >
                            <br />
                                FormTask2
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/formtask9" >
                                FormTask9
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/irctctask2" >
                            <br />
                                IRCTC
                            </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="link" to="/apidemo1" >
                            apidemo1
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>
    )
}
