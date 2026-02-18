import React from 'react';
import { createRoot } from 'react-dom/client';

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto bg-[#0f172a] text-slate-200">
      <header className="mb-12 border-b border-slate-800 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-500/20 p-2 rounded-lg border border-indigo-500/30">
              <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">Backend Core Platform</h1>
              <p className="text-slate-500 font-medium">Standard Maven Structure • Spring Boot 3.2.2</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-mono text-slate-400">JAVA_17</span>
            <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-mono text-indigo-400">BUILD_SUCCESS</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
              Directory Architecture
            </h2>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between group">
                <span className="text-emerald-400">src/main/java</span>
                <span className="text-slate-600 group-hover:text-slate-400 transition-colors italic">Domain Logic & Controllers</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between group">
                <span className="text-amber-400">src/main/resources</span>
                <span className="text-slate-600 group-hover:text-slate-400 transition-colors italic">Application Config & DDL</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between group">
                <span className="text-sky-400">./Dockerfile</span>
                <span className="text-slate-600 group-hover:text-slate-400 transition-colors italic">Multi-stage Build Spec</span>
              </div>
            </div>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 text-indigo-300">
              API Security Context
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:border-slate-700 transition-all">
                <h3 className="text-sm font-bold text-slate-300 mb-1">JWT Stateful Auth</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Stateless verification with HS256 signing and expiration management.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:border-slate-700 transition-all">
                <h3 className="text-sm font-bold text-slate-300 mb-1">RBAC Matrix</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Granular access control for ADMIN, CUSTOMER, PROVIDER, and STAFF.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl h-fit">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Build Status</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Spring Boot</span>
                <span className="text-xs font-mono bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">3.2.2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Java Runtime</span>
                <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">Temurin-17</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Maven Engine</span>
                <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">3.9.x</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-[10px] text-slate-600 uppercase font-bold tracking-tighter mb-4">Quick Deploy Commands</p>
              <div className="bg-black/40 p-3 rounded-lg border border-slate-800 select-all cursor-text">
                <code className="text-xs text-indigo-400 font-mono">./mvnw clean install</code>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="mt-16 text-center border-t border-slate-800 pt-8 pb-12">
        <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
          Service Booking Platform • Enterprise Backend Scaffold
        </p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<Dashboard />);
