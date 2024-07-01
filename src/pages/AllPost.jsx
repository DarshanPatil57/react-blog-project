import React, useState, useEffect from 'react'
import { Container,PostCard } from '../Components'
import appwriteService from '../Appwrite/conf'
import { useEffect, useState } from 'react'

function AllPost() {
    const [post,setPost] = useState([])
    useEffect(() =>{},[])
    appwriteService.getPosts([]).then((post) => setPost(post)){
        if(post){
            setPost(post.documents)
        }
    }
  return (
    <div className=' w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post) =>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost