import React from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/Post";
import PostBar from "@/components/PostBar"

const Index = () => {
    return (
    <>
        <Navbar/>
        <div className="home">
            <PostBar/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    </>
    )
}

export default Index;