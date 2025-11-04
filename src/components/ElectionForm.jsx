import { useState } from "react";
import { Plus, CheckCircle2 } from "lucide-react";

export default function ElectionForm({ onCreate, onAddCandidate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [candidateName, setCandidateName] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title: title.trim(), description: description.trim() });
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    if (!candidateName.trim()) return;
    onAddCandidate(candidateName.trim());
    setCandidateName("");
  };

  return (
    <section id="create" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Create an Election</h2>
      <form onSubmit={handleCreate} className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm text-slate-600">Election title</label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Student Council 2025"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-slate-600">Description</label>
          <textarea
            className="w-full rounded-md border border-slate-300 px-3 py-2 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Share details and rules for voters"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700 transition-colors"
        >
          <CheckCircle2 size={18} />
          Save Election
        </button>
      </form>

      <div className="h-px bg-slate-200 my-6" />

      <form onSubmit={handleAddCandidate} className="grid sm:grid-cols-[1fr_auto] gap-3">
        <input
          type="text"
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add candidate name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
        >
          <Plus size={18} />
          Add Candidate
        </button>
      </form>
    </section>
  );
}
