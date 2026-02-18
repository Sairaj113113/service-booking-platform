
import React, { useState, useCallback } from 'react';
import { FileNode } from './types';
import { PROJECT_STRUCTURE } from './constants';
import FileIcon from './components/FileIcon';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(PROJECT_STRUCTURE.children?.[0] || null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set([PROJECT_STRUCTURE.name]));
  const [copied, setCopied] = useState(false);

  const toggleFolder = useCallback((path: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  const copyToClipboard = () => {
    if (selectedFile?.content) {
      navigator.clipboard.writeText(selectedFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderFileTree = (node: FileNode, path: string = "") => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isFolder = !!node.children;
    const isExpanded = expandedFolders.has(currentPath);

    return (
      <div key={currentPath} className="select-none">
        <div 
          onClick={() => isFolder ? toggleFolder(currentPath) : setSelectedFile(node)}
          className={`group flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-colors ${
            !isFolder && selectedFile?.name === node.name ? 'bg-slate-700 text-white' : 'hover:bg-slate-800 text-slate-400'
          }`}
          style={{ paddingLeft: `${(currentPath.split('/').length - 1) * 1.25 + 0.75}rem` }}
        >
          <span className="w-4 flex justify-center">
            {isFolder && (
              <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </span>
          <FileIcon name={node.name} isFolder={isFolder} isOpen={isExpanded} />
          <span className="text-sm font-medium truncate">{node.name}</span>
        </div>
        {isFolder && isExpanded && node.children?.map(child => renderFileTree(child, currentPath))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      {/* Sidebar - Explorer */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-800 bg-slate-900/50 backdrop-blur-sm flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Explorer</h2>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            JAVA 17
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {renderFileTree(PROJECT_STRUCTURE)}
        </div>
        <div className="p-4 bg-slate-800/30 border-t border-slate-800">
          <button 
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md text-sm font-semibold transition-all shadow-lg active:scale-95"
            onClick={() => alert("Scaffolding package preparation... (Simulated)")}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Project
          </button>
        </div>
      </aside>

      {/* Main Content - Code Viewer */}
      <main className="flex-1 flex flex-col min-w-0">
        {selectedFile ? (
          <>
            <div className="h-12 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2 overflow-hidden">
                <FileIcon name={selectedFile.name} />
                <h1 className="text-sm font-medium text-slate-300 truncate">{selectedFile.name}</h1>
              </div>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-[#0d1117] p-6">
              <pre className="text-sm leading-relaxed">
                <code className="block whitespace-pre text-slate-300">
                  {selectedFile.content}
                </code>
              </pre>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-4">
            <svg className="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm">Select a file from the sidebar to view code</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
