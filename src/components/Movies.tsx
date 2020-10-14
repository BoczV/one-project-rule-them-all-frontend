import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Movies() {
    const [movies, setMovies] = useState<Movie[]>()

    useEffect(() => { 
        const url = "https://the-one-api.dev/v2/movie"
        Axios.get(url, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
        }}).then((data) => {
            console.log(data);
            setMovies(data.data.docs)
        })
    }, [])

    return (
        <div>
            {movies?.map((movie) => (
                <a href={`movie/${movie._id}`}><p>{movie.name}</p></a>
            ))}
        </div>
    )
}

export default Movies
