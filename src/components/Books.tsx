import Axios from 'axios'
import React, {useEffect, useState} from 'react'

function Books() {
    const [books, setBooks] = useState<Book[]>()

    useEffect(() => {
        const url = "https://the-one-api.dev/v2/book"
        Axios.get(url).then((data) => {
            setBooks(data.data.docs)
        })
    }, [])
    return (
        <div>
            {books?.map((book: Book) => (
                <a href={`/book/${book._id}`}><p>{book.name}</p></a>
            ))}
        </div>
    )
}

export default Books
