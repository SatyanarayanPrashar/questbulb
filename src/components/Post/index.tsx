import React from "react";
import NextLink from "next/link";

const Index = () => {

    return (
        <div className="post-card-out-box">
            <div className="post-top-title">Edloops</div>
            <div className="post-top-oneliner">Top 1% Learning Materials Curated and Crafted into Courses.</div>
            <div className="post-top-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            <div className="post-bottom-actionbar">
                <div className="post-bottom-actionbar-left-grp">
                    <img className="post-user-img" src="./img/user.jpeg" />
                    <div className="post-user-name">Satya</div>
                </div>
                <div className="post-bottom-actionbar-right-grp">
                    <div className="post-action-bttns">Upvote</div>
                    <div className="post-action-bttns">Support</div>
                </div>
            </div>
        </div>
    )
}

export default Index;