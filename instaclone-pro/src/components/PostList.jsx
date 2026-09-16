import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${API_URL}?_page=${currentPage}&_limit=5`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const newPosts = await response.json();

        setPosts((oldPosts) => [...oldPosts, ...newPosts]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <div className="post-list">
      <h2>Photo Posts</h2>

      {error && <p>{error}</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <button onClick={handleLoadMore} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}