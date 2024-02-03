<h3 className="title">Getting Started</h3>

<br>

<p className="text">Initialize new React project with `yarn` package manager and `vite`</p>

<br>

<Code language="bash">
  yarn create vite project_name
</Code>

<br> 

<p className="text">Install dependencies</p>

<br>

<Code language="bash">
  yarn add markdown-to-jsx react-syntax-highlighter react-copy-to-clipboard
</Code>

<br> 

<h3 className="title">Build `Post` Component</h3>

<br>

<p className="text">This component holds the logic to parse markdown files in React.</p>

<br>

<Code language="javascript">
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Code } from "./components"; 

export default function Post() {
  // useState
  const [posts, setPosts] = useState("");

  // useEffect
  useEffect(() => {
    import("../markdown/article.md")
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPosts(response))
          .catch(err => console.log(err));
      });
  }, []);

  return (
    &lt;article className="article">
      &lt;div className="article__wrapper container">
        &lt;div className="post__wrapper">
          &lt;Markdown options={{
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
</Code>

<br>

<h3 className="title">Build `Code` Component</h3>

<br> 

<p className="text">Use this base template. Please refer to the documentation provided to customize each package accordingly. I tend to use `customStyle` and `wrapLongLines` attributes to enhance presentation and readability of the code snipper across devices.</p>

<br> 

<Code language="javascript">
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ children, language }) {
  return (
    &lt;div className="code">
      &lt;SyntaxHighlighter
        language={language}
        style={coldarkDark}
      >
        {children}
      </SyntaxHighlighter>
    </div >
  )
}

// PropTypes object to be defined to fix missing props validation
Code.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
}
</Code>