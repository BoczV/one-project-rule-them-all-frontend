import React from 'react'

interface CharacterProps {
    character: Char
  }

export const Character: React.FC<CharacterProps> = ({character}) => {
    return (
        <div>
            <a href={character.wikiUrl} target="_blank" rel="noopener noreferrer">{character.name}</a>
        </div>
    )
}
