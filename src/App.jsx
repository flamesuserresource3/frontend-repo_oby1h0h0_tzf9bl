import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ElectionForm from "./components/ElectionForm";
import CandidateList from "./components/CandidateList";
import ResultsPanel from "./components/ResultsPanel";

function App() {
  const [election, setElection] = useState({ title: "", description: "" });
  const [candidates, setCandidates] = useState([]);

  const hasElection = useMemo(() => Boolean(election.title?.trim()), [election]);

  const handleCreateElection = ({ title, description }) => {
    setElection({ title, description });
  };

  const handleAddCandidate = (name) => {
    const id = crypto.randomUUID();
    setCandidates((prev) => [...prev, { id, name, votes: 0 }]);
  };

  const handleRemoveCandidate = (id) => {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  };

  const handleVote = (id) => {
    setCandidates((prev) => prev.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-slate-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8">
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Run a secure, simple online election
              </h1>
              <p className="mt-3 text-slate-600">
                Create an election, add candidates, and collect votes instantly. This demo stores data in
                your browser only. We can connect it to a database-backed API next.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-br from-indigo-50 to-white">
              <ResultsPanel title={election.title} description={election.description} candidates={candidates} />
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          <ElectionForm onCreate={handleCreateElection} onAddCandidate={handleAddCandidate} />
          <CandidateList
            candidates={candidates}
            onRemove={handleRemoveCandidate}
            onVote={handleVote}
          />
        </div>

        {!hasElection && (
          <div className="text-sm text-slate-500">
            Tip: Give your election a title to personalize the results section above.
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        Built with love for quick prototyping. Not production secure yet.
      </footer>
    </div>
  );
}

export default App;
