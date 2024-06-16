'use client'
import { Editor as MonacoEditor } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';
import ResultBox from './Result';
import SubmitMessage from './Submit';

const CodeEditor = () => {
    const [code, setCode] = useState<string | undefined>("// start here");
    const [theme, setTheme] = useState<"light" | "vs-dark">("light");
    const [language, setLanguage] = useState<string>('javascript');
    const [run, setRun] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    console.log('code : ', code);

    const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
        setCode("// start here");
    };

    const handleRun = () => {
        setSubmit(false);
        setRun(true);
    };

    const handleSubmit = () => {
        setRun(false);
        setSubmit(true);
    };

    useEffect(() => {
        if (run || submit) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [run, submit]);

    return (
        <div className="flex-1 p-2">

            {/* language and theme toggle */}
            <div className='flex justify-between flex-nowrap mb-1'>
                <select
                    value={language}
                    onChange={handleSelectLanguage}
                    className='p-2 border-2 bg-gray-50 rounded-md'
                >
                    <option value="javascript">javascript</option>
                    <option value="typescript">typescript</option>
                </select>

                <button
                    className={`${theme === 'vs-dark' ?
                        'bg-[#1E1E1E] text-white' :
                        'bg-gray-50 border-2'} 
                        rounded-md py-2 px-4`}
                    onClick={() => setTheme(theme === 'light' ? 'vs-dark' : 'light')}
                >
                    Toggle Theme
                </button>
            </div>

            {/* monaco-editor/react */}
            <MonacoEditor
                height="70vh"
                language={language}
                value={code}
                onChange={(newValue) => setCode(newValue)}
                theme={theme}
                options={{
                    fontSize: 16,
                    minimap: { enabled: false },
                }}
                className='mb-1 border'
            />

            {/* run and submit button */}
            <div className="space-x-4 mb-2">
                <button
                    onClick={handleRun}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 text-gray-50 rounded-md shadow-md">
                    RUN
                </button>
                <button
                    onClick={handleSubmit}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 text-gray-50 rounded-md shadow-md"
                >
                    SUBMIT
                </button>
            </div>

            {/* mock result and submit message */}
            {/* Scroll to buttom*/}
            <div ref={bottomRef}>
                {run && <ResultBox onClose={() => setRun(false)} />}
                {submit && <SubmitMessage onClose={() => setSubmit(false)} />}
            </div>
        </div>
    );
};

export default CodeEditor;
