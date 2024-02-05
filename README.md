# DOC-MDX 

This is doc-mdx, a simple application that allows users create concise technical documentation directly from a markdown document. In this article, I will go over the process of installation and usage.

### Technologies 

```sh
1. React.js 

2. markdown-to-jsx
- customizable React markdown component
- support for HTML tags to be rendered

3. react-syntax-highlighter 
- syntax-highliting component for React

4. react-copy-to-clipboard
- copy-to-clipboard React component
```

### Live 

[https://doc-mdx.vercel.app](https://doc-mdx.vercel.app)

---

### Getting Started

Initialize new React project with `yarn` package manager and `vite`

```sh
yarn create vite project_name
```

Install dependencies

```sh
yarn add markdown-to-jsx react-syntax-highlighter react-copy-to-clipboard
```

### Build `Post` Component

This component holds the logic to parse markdown files in React.

```javascript
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
```

### Build `Code` Component ###

Use this base template. Please refer to the documentation provided to customize each package accordingly. I tend to use `customStyle` and `wrapLongLines` attributes to enhance presentation and readability of the code snipper across devices.

```javascript
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ children, language }) {
  return (
    <div className="code">
      <SyntaxHighlighter
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
```