import { BarChart3 } from "lucide-react";

export default function ResultsPanel({ title, description, candidates }) {
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const maxVotes = Math.max(1, ...candidates.map((c) => c.votes));

  return (
    <section id="results" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 size={18} className="text-indigo-600" />
        <h2 className="text-xl font-semibold text-slate-900">Results</h2>
      </div>
      {title ? (
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide text-slate-500">Election</p>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {description && <p className="text-slate-600 mt-1">{description}</p>}
        </div>
      ) : (
        <p className="text-slate-500 mb-4">Create an election to start collecting votes.</p>
      )}

      {candidates.length === 0 ? (
        <p className="text-slate-500">No candidates to show yet.</p>
      ) : (
        <div className="grid gap-3">
          {candidates.map((c) => {
            const pct = totalVotes === 0 ? 0 : Math.round((c.votes / totalVotes) * 100);
            const width = Math.max(6, Math.round((c.votes / maxVotes) * 100));
            return (
              <div key={c.id} className="grid gap-1">
                <div className="flex items-end justify-between">
                  <p className="font-medium text-slate-900">{c.name}</p>
                  <p className="text-sm text-slate-600">{c.votes} vote{c.votes !== 1 ? "s" : ""} • {pct}%</p>
                </div>
                <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            );
          })}
          <p className="text-xs text-slate-500 mt-2">Total votes: {totalVotes}</p>
        </div>
      )}
    </section>
  );
}
