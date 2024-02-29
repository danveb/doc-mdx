import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold, coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, PasteIcon } from "./assets/icons";
import "../styles/Code.css";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Code({ children, language }) {
  // useState 
  const [copied, setCopied] = useState(false);

  // useTheme 
  const { theme } = useTheme();

  // useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <CopyToClipboard
        text={children}
        onCopy={() => setCopied(true)}
      >
        <button className="code__icon copy__icon">
          {copied ? <PasteIcon className="paste__icon" /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? coldarkDark : coldarkCold}
        wrapLongLines={true}
        customStyle={{
          fontSize: "14px",
          padding: "14px 30px",
        }}
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