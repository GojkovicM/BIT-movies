import React, {useContext, useEffect} from "react";
import "./single-movie.scss"
import { MoviesContext } from "../../store/movie";
import { useParams } from "react-router-dom";

function SingleMovie() {

    const{selectedMovie, seasons, cast, fetchCastHandler, fetchSeasonsHandler, fetchByIdHandler} = useContext(MoviesContext)

    const {id} = useParams()
    
    useEffect(() => {
        fetchCastHandler(id)
        fetchSeasonsHandler(id)
        fetchByIdHandler(id)
    },[id])

    return ( 
        <div id="singleMovie">
            <h1>{selectedMovie?.data?.name}</h1>
            <div className="wrapper">
                <img src={selectedMovie?.data?.image?.original} alt="" />
                    <div className="wrapper-data">
                        <div className="seasons">
                        <h3>Seasons <span>({seasons?.data.length})</span></h3>
                        {seasons?.data.map((e) => (
                            <div>
                                <ul> 
                                    <li>{e.premiereDate} - {e.endDate}</li>
                                </ul>
                            </div>
                        ))}
                        </div>
                        <div className="cast">
                        <h3>Cast</h3>
                        {cast?.data.map((e) => (
                            <div>
                                <ul>
                                    <li>{e.person.name}</li>
                                </ul>
                            </div>
                        ))}   
                        </div>
                    </div>
            </div>
            <div className="details">
                <h3>Details</h3>
                <p dangerouslySetInnerHTML={{__html: selectedMovie?.data?.summary}}></p>
            </div>
        </div>
     );
}

export default SingleMovie ;