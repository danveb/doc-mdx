import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ children, language }) {
  return (
    <div className="code">
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

// PropTypes object to be defined to fix missing props validation
Code.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
}