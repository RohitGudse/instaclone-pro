import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`);
    const data = await res.json();
    setPosts(prev => [...prev, ...data]);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}