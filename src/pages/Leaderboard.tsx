import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data
const leaderboardData = [
  { miner: "prompt_wizard_2024", score: 96.847, submissions: 1247, avgLatency: "142ms", efficiency: 94.5, updated: "2 min ago" },
  { miner: "style_master_v3", score: 95.234, submissions: 1103, avgLatency: "156ms", efficiency: 92.8, updated: "5 min ago" },
  { miner: "semantic_sage_pro", score: 93.712, submissions: 989, avgLatency: "163ms", efficiency: 91.2, updated: "8 min ago" },
  { miner: "context_king_ai", score: 92.456, submissions: 876, avgLatency: "178ms", efficiency: 89.7, updated: "12 min ago" },
  { miner: "neural_prompt_v2", score: 91.823, submissions: 834, avgLatency: "185ms", efficiency: 88.3, updated: "15 min ago" },
  { miner: "creative_synthesizer", score: 90.567, submissions: 792, avgLatency: "192ms", efficiency: 87.1, updated: "18 min ago" },
  { miner: "prompt_optimizer_x", score: 89.234, submissions: 745, avgLatency: "201ms", efficiency: 85.6, updated: "22 min ago" },
  { miner: "semantic_engine_pro", score: 88.901, submissions: 723, avgLatency: "208ms", efficiency: 84.9, updated: "25 min ago" },
  { miner: "style_replicator_ai", score: 87.654, submissions: 689, avgLatency: "215ms", efficiency: 83.2, updated: "28 min ago" },
  { miner: "prompt_architect_2024", score: 86.432, submissions: 654, avgLatency: "223ms", efficiency: 81.8, updated: "32 min ago" }
];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = leaderboardData.filter(item => 
    item.miner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-slate-900 mb-1">
            Miner Leaderboard
          </h1>
          <p className="text-slate-500 text-sm">Real-time rankings based on latest validation window (rolling 24h average)</p>
        </div>

        <Card className="bg-white border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-1">Active Miners</h2>
                <p className="text-xs text-slate-500">{leaderboardData.length} miners currently competing</p>
              </div>
              
              <div className="flex gap-3">
                <Input 
                  placeholder="Search miner ID..." 
                  className="w-64 text-sm border-slate-300 focus:border-slate-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline" className="text-xs border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-slate-100 py-3 px-6 text-xs font-medium text-slate-600 uppercase tracking-wide grid grid-cols-12 gap-6 border-b border-slate-200">
            <div className="col-span-1">Rank</div>
            <div className="col-span-3">Miner ID</div>
            <div className="col-span-2">Combined Score</div>
            <div className="col-span-2">Submissions</div>
            <div className="col-span-2">Avg Latency</div>
            <div className="col-span-1">Efficiency</div>
            <div className="col-span-1 text-right">Updated</div>
          </div>

          {/* Table Rows */}
          <div>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 px-6 border-b border-slate-100 hover:bg-slate-50 transition-colors grid grid-cols-12 gap-6 items-center"
                >
                  <div className="col-span-1">
                    <span className="text-lg font-semibold text-slate-900">
                      {idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <p className="font-mono text-sm font-medium text-slate-900">{item.miner}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-lg font-semibold text-slate-900">{item.score.toFixed(3)}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-slate-700">{item.submissions.toLocaleString()}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-mono text-slate-700">{item.avgLatency}</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-slate-900">{item.efficiency}%</span>
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-xs text-slate-500">{item.updated}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-slate-500">No miners found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-slate-200 text-center">
            <Button variant="outline" className="text-xs border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900">
              Load More Miners
            </Button>
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          <Card className="bg-white border border-slate-200 shadow-sm p-5">
            <div className="text-xs font-medium text-slate-500 mb-2">Top Score</div>
            <div className="text-2xl font-semibold text-slate-900">{leaderboardData[0].score.toFixed(3)}</div>
            <div className="text-xs text-slate-500 mt-1">{leaderboardData[0].miner}</div>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm p-5">
            <div className="text-xs font-medium text-slate-500 mb-2">Avg Score</div>
            <div className="text-2xl font-semibold text-slate-900">
              {(leaderboardData.reduce((acc, curr) => acc + curr.score, 0) / leaderboardData.length).toFixed(3)}
            </div>
            <div className="text-xs text-slate-500 mt-1">Across all miners</div>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm p-5">
            <div className="text-xs font-medium text-slate-500 mb-2">Total Submissions</div>
            <div className="text-2xl font-semibold text-slate-900">
              {leaderboardData.reduce((acc, curr) => acc + curr.submissions, 0).toLocaleString()}
            </div>
            <div className="text-xs text-slate-500 mt-1">Last 24 hours</div>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm p-5">
            <div className="text-xs font-medium text-slate-500 mb-2">Avg Efficiency</div>
            <div className="text-2xl font-semibold text-slate-900">
              {(leaderboardData.reduce((acc, curr) => acc + curr.efficiency, 0) / leaderboardData.length).toFixed(1)}%
            </div>
            <div className="text-xs text-slate-500 mt-1">Network average</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;