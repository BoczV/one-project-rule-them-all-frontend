import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { Quote } from './Quote';

function Movie(props:any) {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<Movie>()
    const [movieQuotes, setMovieQuotes] = useState<Quote[]>()

    useEffect(() => {
        const movieUrl = `https://the-one-api.dev/v2/movie/${movieId}`;
        const quoteUrl = `https://the-one-api.dev/v2/movie/${movieId}/quote`
        Axios.get(movieUrl, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
            }
        }).then((data) => {
            console.log(data.data.docs);
            setMovie(data.data.docs[0])
        })

        Axios.get(quoteUrl, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
            }
        }).then((data) => {
            console.log(data.data.docs);
            setMovieQuotes(data.data.docs)
        })
    }, [])
    return (
        <div>
            <h1>{movie?.name}</h1>
            <h2>Academic awards wins: {movie?.academyAwardWins}</h2>
            <h3>Budget: {movie?.budgetInMillions} million</h3>
            {movieQuotes?.map((movieQuote) => (
                <Quote quote={movieQuote}/>
            ))}
        </div>
    )
}

export default Movie
