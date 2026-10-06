import StoryItem from "./StoryItem";

export default function StoryBar() {
  const stories = [
    { id: 1, name: "Story 1", image: "img1" },
    { id: 2, name: "Story 2", image: "img2" },
    { id: 3, name: "Story 3", image: "img3" },
  ];

  return (
    <section className="story-bar">
      {stories.map(({ id, image }) => (
        <StoryItem key={id} story={image} />
      ))}
    </section>
  );
}