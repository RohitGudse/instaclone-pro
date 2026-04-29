import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

export default function PostCard({ post }) {
  return (
    <div className="post">
      <h4>{post.username}</h4>
      <img src={post.image} alt="" />
      <LikeButton />
      <CommentSection postId={post.id} />
    </div>
  );
}