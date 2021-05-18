import React, { useState } from 'react'
import ShowImg from './ShowImg'
function Search() {
    const [img, setImg] = useState("")

    return (
        <div>
            <input type="text" placeholder="Enter the image name" value={img} onChange={(e) => setImg(e.target.value)} />
            <ShowImg image={img} />
        </div>
    )
}

export default Search
