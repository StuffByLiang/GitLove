import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { text } from 'ionicons/icons';

const CodeEditor = () => {

    const [code, codeSet] = React.useState(window['code']);
    const editorUpdate = (text) => {
        window['code'] = text;
        codeSet(text);
    };

    return (
        <Editor
            value={code}
            onValueChange={code => editorUpdate(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
                fontFamily: '"SF Mono", "Consolas", monospace',
                fontSize: 16,
            }}
        />
    );

}

export default CodeEditor;