import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Chapter from './Chapter';

function Chapters() {
    const [chapters, setChapters] = useState<Chapter[]>()

    useEffect(() => {
        const url = `https://the-one-api.dev/v2/chapter`;
        Axios.get(url, {
            headers: {
                withCredentials: true,
                "Authorization": "Bearer xlF788JA0whvejdRbAFO"
        }
        }).then((data) => {
            console.log(data.data.docs);
            setChapters(data.data.docs)
        })
    }, [])
    return (
        <div>
            {chapters?.map((chapter) => (
                <a href={`/chapter/${chapter._id}`}><p>{chapter.chapterName}</p></a>
            ))}
        </div>
    )
}

export default Chapters
