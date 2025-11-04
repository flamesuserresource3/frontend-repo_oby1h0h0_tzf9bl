import { BarChart3, Home } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center shadow">
            <BarChart3 size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Votely</p>
            <p className="text-xs text-slate-500">Online voting made simple</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-slate-600">
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors">
            <Home size={16} />
            <span>Home</span>
          </a>
          <a href="#results" className="hover:text-slate-900 transition-colors">Results</a>
          <a href="#create" className="hover:text-slate-900 transition-colors">Create</a>
        </nav>
        <div className="sm:hidden" />
      </div>
    </header>
  );
}
