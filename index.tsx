import React from 'react';
import { createRoot } from 'react-dom/client';

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <h1 className="text-3xl font-bold tracking-tight">Backend Project Generated</h1>
        </div>
        <p className="text-slate-400 text-lg">
          A production-ready Spring Boot 3 environment has been scaffolded. 
          The project structure follows Maven standards and includes production-grade security and location modules.
        </p>
      </header>

      <section className="grid gap-6 mb-12">
        <h2 className="text-xl font-semibold text-slate-200">System Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-indigo-400 font-bold mb-2">Auth Module</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              JWT stateless security with BCrypt password encoding. Pre-configured for ADMIN, CUSTOMER, PROVIDER, and STAFF roles.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-emerald-400 font-bold mb-2">Location Engine</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hierarchical City & Area entities with JPA relationships and automatic schema generation.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-amber-400 font-bold mb-2">Persistence Layer</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              PostgreSQL driver configuration with Hibernate/JPA. Cloud-ready environment variable mapping.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
            <h3 className="text-purple-400 font-bold mb-2">Deployment</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Render blueprint (`render.yaml`) included for one-click deployment to managed hosting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Next Steps</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="bg-indigo-500/10 text-indigo-400 w-6 h-6 rounded flex items-center justify-center text-xs font-bold">1</span>
            <span className="text-sm text-slate-300">Set environment variables in your IDE or system.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-indigo-500/10 text-indigo-400 w-6 h-6 rounded flex items-center justify-center text-xs font-bold">2</span>
            <code className="text-xs bg-black/50 p-2 rounded text-slate-400 flex-1">mvn clean install</code>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-indigo-500/10 text-indigo-400 w-6 h-6 rounded flex items-center justify-center text-xs font-bold">3</span>
            <code className="text-xs bg-black/50 p-2 rounded text-slate-400 flex-1">mvn spring-boot:run</code>
          </li>
        </ul>
      </section>
      
      <footer className="mt-12 text-center">
        <p className="text-slate-600 text-xs">
          Standalone Spring Boot Project Structure &copy; 2024
        </p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<Dashboard />);
