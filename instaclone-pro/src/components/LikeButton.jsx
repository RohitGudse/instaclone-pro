import React, { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {

        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }

    };

    return (

        <div className="like-container">

            <button
                className={liked ? "liked-btn" : "like-btn"}
                onClick={handleLike}
            >

                {liked ? "❤️ Liked" : "🤍 Like"}

            </button>

            <h3>Total Likes : {likes}</h3>

        </div>

    );

};

export default LikeButton;