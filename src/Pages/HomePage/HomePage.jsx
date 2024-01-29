import React, { useContext } from "react";
import './home-page.scss'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { MoviesContext } from "../../store/movie";
import MovieCard from "../../Components/MovieCard/MovieCard";


function HomePage() {

    const{movies} = useContext(MoviesContext)

    return (  
        <div id="Homepage">
           <Header/>
           <MovieCard/>
           <Footer/>
        </div>
    );
}

export default HomePage;