import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Character } from './Character'



function Characters() {
    const [characters, setCharacters] = useState<Char[]>()
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)

    useEffect(() => { 
        const url = "http://localhost:8762/lotrservice/character"
        const url2 = `https://the-one-api.dev/v2/character?offset=${offset}&limit=${limit}`
        Axios.get(url2, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
        }}).then((data) => {
            console.log(data);
            setCharacters(data.data.docs)
        })
    }, [limit, offset])


    return (
        <div>
            {characters?.map((character: Char) => (
                <Character key={character.id} character={character}/>
            ))}
            <button disabled={limit - 20 === 0? true: false} onClick={() => {
                setLimit(limit - 20)
                setOffset(offset - 20)
            }}>Previous</button>
            <button disabled={limit + 20 === characters?.length? true: false} onClick={() => {
                setLimit(limit + 20)
                setOffset(offset + 20)
                }}>Next</button>
        </div>
    )
}

export default Characters
