import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Code } from "../components";

export default function Post() {
  // useState
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetchMarkdownFile();
  }, []);

  const fetchMarkdownFile = async () => {
    try {
      const markdownModule = await import("../markdown/article.md");
      setPosts(markdownModule.default);
    } catch (error) {
      console.error("Error fetching Markdown file:", error);
    }
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