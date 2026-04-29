import Navbar from "../components/Navbar";
import StoryBar from "../components/StoryBar";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <>
      <Navbar />
      <StoryBar />
      <PostList />
    </>
  );
}