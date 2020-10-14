import React, {useEffect} from 'react'
import Axios from 'axios'

function Quotes() {
    useEffect(() => { 
        const url = `https://the-one-api.dev/v2/quote`
        Axios.get(url, {
            headers: {
                withCredentials: true,
                Authorization: "Bearer xlF788JA0whvejdRbAFO",}
        }).then((data) => {
            console.log(data.data)
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Quotes
