import React, { useEffect, useState } from 'react'

function Placeholder() {
    const [postId, setPostId] = useState("")
    const [posts, setPosts] = useState([])



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((json) => setPosts(json))
    }, [postId]);
    console.log(posts)
    return (
        <div>
            <input type="text" placeholder="Enter the post Id" value={postId} onChange={(e) => setPostId(e.target.value)} />
            <div className="posts">
                {posts.map((post, index) => {
                    return (
                        index < 10 &&
                        <div key={post.id} className="post">
                            <h2>{post.name}</h2>
                            <h3>{post.email}</h3>
                            <p>{post.body}</p>
                        </div>

                    )

                }

                )}
            </div>
        </div>
    )
}

export default Placeholder
