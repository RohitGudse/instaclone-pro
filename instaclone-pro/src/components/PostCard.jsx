import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

const PostCard = ({ post }) => {
  const { id, username, image } = post;

  return (
    <article className="post">
      <header className="post-header">
        <h4>{username}</h4>
      </header>

      <div className="post-image">
        <img src={image} alt={`${username}'s post`} />
      </div>

      <footer className="post-actions">
        <LikeButton />
        <CommentSection postId={id} />
      </footer>
    </article>
  );
};

export default PostCard;