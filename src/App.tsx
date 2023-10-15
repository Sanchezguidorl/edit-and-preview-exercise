import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const defaultContent=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
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

function App() {
  const [text, setText] = useState<string>(defaultContent);
  const [areExpanded, setAreExpanded] = useState<boolean>(false);
  const [whoAreExpanded, setWhoAreExpanded] = useState<number>(0);

  const handleChageTexto = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newData = event.target.value;
    setText(newData);
  };

  return (
    <div id="App">
      <div className={`${whoAreExpanded==2 ? "display-none " : whoAreExpanded==1 && "grow-height "} border`} 
      id="EditorContainer"
      >
        <Editor
          handleChange={handleChageTexto}
          expanded={() => setAreExpanded(!areExpanded)}
          isExpanded={areExpanded}
          giveId={setWhoAreExpanded}
          text={text}
        />
      </div>
      <div className={`${whoAreExpanded==1 ? "display-none ":whoAreExpanded==2 && "grow-height "} border`} id="preview-data">
        <Preview
          text={text}
          expanded={() => setAreExpanded(!areExpanded)}
          isExpanded={areExpanded}
          giveId={setWhoAreExpanded}
        />
      </div>
    </div>
  );
}

export default App;
