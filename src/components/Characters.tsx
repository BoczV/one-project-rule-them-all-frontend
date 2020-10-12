import Axios from 'axios'
import React, {useEffect, useState} from 'react'

interface Char {
    name: string,
    wikiUrl: string,
    id: string,
    gender: string,
    birth: string,
    race: string,
    death: string,
    hair: string,
    realm: string,
    spouse: string,
    height: string
}


function Characters() {
    const [characters, setCharacters] = useState<Char[]>()

    useEffect(() => { 
        const url = `https://the-one-api.dev/v2/character`
        Axios.get(url, {
            headers: {
                withCredentials: true,
                Authorization: "Bearer xlF788JA0whvejdRbAFO",}
        }).then((data) => {
            setCharacters(data.data.docs)
        })
    }, [])

    return (
        <div>
            {characters?.map((character: Char) => (
                <>
                <p>{character.name}</p><a href={character.wikiUrl}>{character.wikiUrl}</a>
                </>
            ))}
        </div>
    )
}

export default Characters
