import React from 'react';

interface FileIconProps {
  name: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const FileIcon: React.FC<FileIconProps> = ({ name, isOpen, isFolder }) => {
  if (isFolder) {
    return (
      <svg className={`w-4 h-4 ${isOpen ? 'text-amber-400' : 'text-amber-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9l-2-2H5a2 2 0 01-2 2v8a2 2 0 012 2z" : "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"} />
      </svg>
    );
  }

  const lowercaseName = name.toLowerCase();
  const ext = name.split('.').pop()?.toLowerCase();
  
  if (lowercaseName === 'dockerfile' || ext === 'dockerfile') {
     return <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM11.221 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM11.221 8.299h2.119c.102 0 .186-.084.186-.186V6.332c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM8.454 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186H8.454c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM8.454 8.299h2.119c.102 0 .186-.084.186-.186V6.332c0-.102-.084-.186-.186-.186H8.454c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM5.688 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186H5.688c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM13.983 8.299h2.119c.102 0 .186-.084.186-.186V6.332c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM13.983 5.519h2.119c.102 0 .186-.084.186-.186V3.552c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM16.749 11.078h2.119c.102 0 .186-.084.186-.186V9.111c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.781c0 .102.084.186.186.186zM1.164 12.016c.127 4.191 3.441 7.411 7.42 7.411 1.492 0 2.814-.424 3.932-1.127 1.831-1.153 3.424-3.322 4.161-5.186h5.158c.102 0 .186-.084.186-.186v-1.78c0-.102-.084-.186-.186-.186h-5.949c-.153 0-.305.034-.441.085-1.119.492-3.119 1.458-4.424 1.458-1.305 0-2.39-.424-2.39-1.559 0-1.136 1.085-1.559 2.39-1.559 1.136 0 2.458.644 3.22 1.424.068.068.17.068.237 0l1.373-1.373a.17.17 0 000-.237c-1.17-1.17-2.949-1.949-4.831-1.949-2.78 0-4.814 1.559-4.814 3.695 0 2.136 2.034 3.695 4.814 3.695 1.119 0 2.508-.424 3.525-.949-.559 1.458-1.932 3.119-3.424 4.051-1.017.61-2.034.949-3.22.949-2.983 0-5.525-2.237-5.831-5.085a.186.186 0 00-.186-.169H1.35c-.102 0-.186.084-.186.186z"/></svg>;
  }

  switch (ext) {
    case 'java':
      return <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
    case 'xml':
      return <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
    case 'yml':
    case 'yaml':
      return <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    case 'md':
      return <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    default:
      return <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
  }
};

export default FileIcon;