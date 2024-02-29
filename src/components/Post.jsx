import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Code } from "../components";

export default function Post() {
  // useState
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetchMarkdownFile();
  }, []);

  const fetchMarkdownFile = () => {
    import("../markdown/article.md")
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPosts(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return (
    <article className="article">
      <div className="article__wrapper container">
        <div className="post__wrapper">
          <Markdown options={{
            overrides: {
              Code: {
                component: Code,
              },
            },
          }}>{posts}</Markdown>
        </div>
      </div>
    </article>
  )
}