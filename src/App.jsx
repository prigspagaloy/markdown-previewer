import React, { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'


const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function changeIcon() {
 const compressor = document.getElementById("expand");
 compressor.classList.toggle("fa-compress");
}

function changeIcon2() {
  const expander = document.getElementById("expand2");
  expander.classList.toggle("fa-compress");
}



function App() {
  const [text, setText] = useState(defaultText);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [resize, setResize] = useState(false);
  

  function preViewer(event) {
    setText(event.target.value);
  }

  function changeSize() {
    setToggle(!toggle);
    setIcon(changeIcon());
    setResize(!resize);
  }
  function changeSize2() {
    setShow(!show);
    setIcon2(changeIcon2());
  }

return (
    <>
      <div id="editor-container" style={{display: !show ? "block" : "none", maxWidth: resize ? "800px" : ""}}>
        <div id="editor-title"><h2 id="editor-text"><i className="fa fa-free-code-camp" style={{ fontSize: "22px" }}></i> Editor</h2><i id="expand" className="fa fa-expand" onClick={changeSize} style={{ fontSize: "22px" }}></i></div> 
          <textarea id="editor" style={{ minHeight: resize ? "800px" : "" }} value={text} onChange={preViewer}></textarea>
        </div>  

      <div id="preview-container" style={{ display: !toggle ? "block" : "none" }}>
        <div id="preview-title"><h2 id="preview-text"><i className="fa fa-free-code-camp" style={{ fontSize: "22px" }}></i> Previewer</h2><i id="expand2" className="fa fa-expand" onClick={changeSize2} style={{ fontSize: "22px" }}></i></div>
          <div id="preview"><ReactMarkdown>{text}</ReactMarkdown></div>
      </div>
    </>  
  )
}

export default App
