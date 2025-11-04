import { Trash2, CheckCircle2 } from "lucide-react";

export default function CandidateList({ candidates, onRemove, onVote }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Candidates</h2>
        <p className="text-sm text-slate-500">{candidates.length} total</p>
      </div>
      {candidates.length === 0 ? (
        <p className="text-slate-500">No candidates yet. Add some to start voting.</p>
      ) : (
        <ul className="grid gap-3">
          {candidates.map((c) => (
            <li key={c.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <div>
                <p className="font-medium text-slate-900">{c.name}</p>
                <p className="text-xs text-slate-500">Votes: {c.votes}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onVote(c.id)}
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-1.5 text-sm hover:bg-emerald-700"
                >
                  <CheckCircle2 size={16} />
                  Vote
                </button>
                <button
                  onClick={() => onRemove(c.id)}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
