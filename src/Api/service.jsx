import axios from "axios"

export const fetchMovies = async () => {
    try{
        const res = await axios.get(
            `https://api.tvmaze.com/shows`
        );
        return res.data;
        
    }catch(error){
        console.log(error);
    }
}


export const fetchSeasons = async (id) => {
    try{
        const res = await axios.get(
            `https://api.tvmaze.com/shows/${id}/seasons`
        );
        return res
    }catch(error){
        console.log(error);
    }
}

export const fetchCast = async(id) => {
    try{
        const res = await axios.get(
            `https://api.tvmaze.com/shows/${id}/cast`
        );
        return res
    }catch(error){
        console.log(error);
    }
}

export const fetchById = async(id) => {
    try{
        const res = await axios.get(
            `https://api.tvmaze.com/shows/${id}`
        )
        return res
    }catch(error){
        console.log(error);
    }
}

export const fetchByName = async(name) => {
    try{
        const res = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${name}`
        )
        return res
    }catch(error){
        console.log(error);
    }
}