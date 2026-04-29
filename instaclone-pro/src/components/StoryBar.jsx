import StoryItem from "./StoryItem";

export default function StoryBar() {
  const stories = ["img1", "img2", "img3"];

  return (
    <div className="story-bar">
      {stories.map((s, i) => (
        <StoryItem key={i} story={s} />
      ))}
    </div>
  );
}