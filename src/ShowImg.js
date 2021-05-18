import React from 'react'

function ShowImg({ image }) {
    const data = `https://source.unsplash.com/600x500/?${image}`
    console.log(image)
    return (
        <div>
            {image == "" || image == null ? <h1>Please enter a image name</h1> : <img src={data} alt="Search Image" />}
        </div>
    )
}

export default ShowImg
