import React from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/Post";

const Index = () => {
    return (
    <>
        <Navbar/>
        <div className="home">
            <PostCard/>
            <PostCard/>
        </div>
    </>
    )
}

export default Index;