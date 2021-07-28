import React, { useState, useEffect } from 'react'
import axios from 'axios'
function DataFetching() {
    const[post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    //useEffect() don't have a porps or state as dependencies
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }, [idFromButtonClick])
    return (
        <div>
            <button
            onClick={()=>setIdFromButtonClick(id)}
            >Post</button>
            <input type="text"
            value = {id} 
            onChange ={e=>setId(e.target.value)} />           
            <ul> {post.title} </ul>
            {/* <ul>
                {posts.map(post=><li key={post.id} > {post.title} </li>)}
            </ul> */}
        </div>
    )
}

export default DataFetching
