import React, {useState} from 'react'
import { Character } from './Character'
import Axios from 'axios'

interface QuoteProps {
    quote: Quote
  }

export const Quote: React.FC<QuoteProps> = ({quote}) => {
    const [person, setPerson] = useState<Char>()

    const findCharacter = (charId: string) => {
        const url = `https://the-one-api.dev/v2/character/${charId}`
        Axios.get(url, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
            }
        }).then((data) => {
            setPerson(data.data.docs)
        })
    }

    return (
        <div>
            <p>{quote.dialog}</p>
            {person === null ? (
                <button onClick={() => findCharacter(quote.character)}>How could said it?</button>
            ): (
            <p>{person?.name}</p>
            )}
        </div>
    )
}
