import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Chapter(props: any) {
    const { chapterId } = useParams();
    const [chapter, setChapter] = useState<Chapter>()

    useEffect(() => {
        const url = `https://the-one-api.dev/v2/chapter/${chapterId}`;
        Axios.get(url, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
        }
        }).then((data) => {
            console.log(data.data.docs);
            setChapter(data.data.docs[0])
        })
    }, [])

    return (
        <div>
            <h1>{chapter?.book}</h1>
            <h2>{chapter?.chapterName}</h2>
        </div>
    )
}

export default Chapter
