import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    setComments([...comments, text]);
    setText("");
  };

  return (
    <div>
      {comments.map((c, i) => <p key={i}>{c}</p>)}
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addComment}>Post</button>
    </div>
  );
}