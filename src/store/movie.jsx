import { createContext, useEffect, useState } from "react";
import { fetchById, fetchByName, fetchCast, fetchMovies, fetchSeasons } from "../Api/service";


export const MoviesContext = createContext({
        fetchMoviesHandler: () => {},
        movies: undefined,
        selectedMovieHandler: () => {},
        selectedMovie: undefined,
        fetchSeasonsHandler: () => {},
        seasons: undefined,
        fetchCastHandler: () => {},
        cast: undefined,
        fetchByIdHandler: () => {},
        filteredMovie: () => {},
        searchedMovie: undefined,
        clearSearch: () => {},

});

const MoviesHandler = ({children}) => {

    const[movies, setMovies] = useState();
    const[selectedMovie, setSelectedMovie] = useState();
    const[seasons, setSeasons] = useState();
    const[cast, setCast] = useState();
    const[search,setSearch] = useState("");
    const[searchMovie, setSearchMovie]= useState("")

   

    const fetchMoviesHandler = async () => {
        try{
            const updateMovies = await fetchMovies();
            setMovies(updateMovies)
        }catch(error){
            console.log(error);
        }
    }

    const fetchSeasonsHandler = async (id) => {
        try{
            const updateSeasons = await fetchSeasons(id);
            setSeasons(updateSeasons) 
        }catch(error){
            console.log(error);
        }
    }

    const selectedMovieHandler = (selected) => {
        setSelectedMovie(selected)
    }

    const fetchCastHandler = async (id) => {
        try{
            const updateCast = await fetchCast(id);
            setCast(updateCast)
        }catch(error){
            console.log(error);
        }
    }

    const fetchByIdHandler = async (id) => {
        try{
            const movieById = await fetchById(id);
            setSelectedMovie(movieById)
        }catch(error){
            console.log(error);
        }
    }

    const fetchByNameHandler = async (name) => {
        try{
            const searchName = await fetchByName(name)
            setSearchMovie(searchName)
        }catch(error){
            console.log(error);
        }
    }

    const filteredMovie = (event) => {
        setSearch(event.target.value)
    }

    const clearSearch = (clear) => {
        setSearch(clear)
    }

    useEffect(() => {
        fetchMoviesHandler()
    }, [])
        


    useEffect(() => {
        fetchByNameHandler(search)
    },[search])
   
       

    
    

    return(
        <MoviesContext.Provider value={{
            fetchMoviesHandler,
            movies: movies,
            selectedMovieHandler,
            selectedMovie: selectedMovie,
            fetchSeasonsHandler,
            seasons: seasons,
            fetchCastHandler,
            cast: cast,
            fetchByIdHandler,
            filteredMovie,
            searchedMovie: searchMovie,
            clearSearch,
            

        }}>
        {children}
        </MoviesContext.Provider>
    )
}

export {MoviesHandler};