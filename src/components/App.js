import React, { useState, useEffect } from "react";
import marked from "marked";   // or { marked } if you’re on latest

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true
});

function App() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Input Section */}
      <textarea
        style={{ width: "50%", padding: "10px", fontSize: "16px" }}
        placeholder="Type your Markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      {/* Preview Section */}
      <div
        style={{
          width: "50%",
          padding: "10px",
          borderLeft: "1px solid #ccc",
          overflowY: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
}

export default App;
