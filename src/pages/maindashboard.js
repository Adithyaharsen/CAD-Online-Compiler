import { React, useEffect, useRef, useState } from 'react';
import './maindashboard.scss';
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../others/constants";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import photo2 from '../images/share.png';
import photo3 from '../images/card1.png';
import { Editor } from "@monaco-editor/react";
import { executeCode } from "../others/api";

export const OCdashboard = () => {
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { Name } = useParams();
  const Back = `/${Name}`;
  const Back1 = `/${Name}/homepage`;

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.error("An error occurred:", error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  const clearOutput = () => {
    setOutput(null);
    setIsError(false);
  };

  return (
    <div className="main-dashboard">
      <div className='card'>
        <div className='back'><Link to={Back1}><button type="button" class="btn btn-dark">Back</button></Link></div>
        <div className='carding'><img className='img' src={photo3} alt="Photo" /></div>
        <div className="dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{Name}</button>
          <ul class="dropdown-menu">
            <li><Link to={Back}>My Dashboard</Link></li>
            <li><Link to={Back}>Login</Link></li>
            <li><Link to={Back1}>HomePage</Link></li>
            <li><Link to={Back}>Help</Link></li>
          </ul>
        </div>
      </div>
      <div className='compilespace'>
        <div className='languages'>
          {languages.map(([lang, version]) => (
            <div key={lang} className='lang'>
              <button
                className={lang}
                onClick={() => onSelect(lang)}
              >
              </button>
            </div>
          ))}
        </div>
        <div className='file'>
          <div className='head1'>
            <div className='input'><h2>Type your code here</h2></div>
            <div className='sh'><button className='share'></button></div>
            <div className='run'>
              <button class="btn btn-dark" onClick={runCode}>
                {isLoading ? "Running..." : "Run"}
              </button>
            </div>
          </div>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            value={value}
            onMount={onMount}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>
        <div className='output'>
          <div className='head2'>
            <div className='output'><h2>Output</h2></div>
            <div className='clear'>
              <button class="btn btn-dark" onClick={clearOutput}>Clear</button>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                height: "75vh",
                padding: "8px",
                color: isError ? "red" : "white",
                border: `1px solid ${isError ? "red" : "#333"}`,
                borderRadius: "4px",
                overflowY: "auto",
                backgroundColor: "#222",
              }}
            >
              {output
                ? output.map((line, i) => <p key={i} style={{ margin: 0 }}>{line}</p>)
                : 'Click "Run Code" to see the output here'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
