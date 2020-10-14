import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Axios from 'axios'

function Book(props: number) {
    const { bookId } = useParams();
    const [chapters, setChapters] = useState<Chapter[]>([])


    useEffect(() => {
        const url = `https://the-one-api.dev/v2/book/${bookId}/chapter`;
        Axios.get(url).then((data) => {
            console.log(data.data.docs);
            setChapters(data.data.docs)
        })
    }, [])
    return (
        <div>
            {chapters.map((chapter) => (
                <a href={`/chapter/${chapter._id}`}><p>{chapter.chapterName}</p></a>
            ))}
        </div>
    )
}

export default Book
