import { useState,useEffect } from "react"
import { Container,PostCard, PostForm } from "../Components"
import React  from 'react'
import appwriteService from '../Appwrite/conf'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function EditPost() {
    const [post,setPost] =  useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) =>{
                if(post){
                    setPost(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug,navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    )
}

export default EditPost