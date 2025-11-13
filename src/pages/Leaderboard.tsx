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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-white">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Miner Leaderboard
          </h1>
          <p className="text-gray-600 text-sm">Real-time rankings based on latest validation window (rolling 24h average)</p>
        </div>

        <Card className="bg-white shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-1">Active Miners</h2>
                <p className="text-xs text-gray-500">{leaderboardData.length} miners currently competing</p>
              </div>
              
              <div className="flex gap-3">
                <Input 
                  placeholder="Search miner ID..." 
                  className="w-64 text-sm border-gray-300 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline" className="text-xs border-blue-300 text-blue-600 hover:bg-blue-50">
                  Refresh
                </Button>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-100 to-pink-100 py-3 px-6 text-xs font-semibold text-gray-800 uppercase tracking-wide grid grid-cols-12 gap-6 border-b border-gray-200">
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
                  className={`py-4 px-6 border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition-colors grid grid-cols-12 gap-6 items-center ${
                    idx === 0 ? 'bg-gradient-to-r from-blue-50 to-pink-50' : ''
                  }`}
                >
                  <div className="col-span-1">
                    <span className="text-lg font-semibold text-gray-900">
                      {idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                    </span>
                  </div>
                  <div className="col-span-3">
                    <p className="font-mono text-sm font-medium text-gray-900">{item.miner}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                      {item.score.toFixed(3)}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-gray-700">{item.submissions.toLocaleString()}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm font-mono text-gray-700">{item.avgLatency}</span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-gray-900">{item.efficiency}%</span>
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-xs text-gray-500">{item.updated}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-gray-500">No miners found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-200 text-center">
            <Button variant="outline" className="text-xs border-blue-300 text-blue-600 hover:bg-blue-50">
              Load More Miners
            </Button>
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          <Card className="bg-[#6366F11A] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-2">TOP SCORE</div>
            <div className="text-3xl font-bold text-gray-900">{leaderboardData[0].score.toFixed(3)}</div>
            <div className="text-xs text-gray-600 mt-2">{leaderboardData[0].miner}</div>
          </Card>

          <Card className="bg-[#FEEFFE] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-2">AVG SCORE</div>
            <div className="text-3xl font-bold text-gray-900">
              {(leaderboardData.reduce((acc, curr) => acc + curr.score, 0) / leaderboardData.length).toFixed(3)}
            </div>
            <div className="text-xs text-gray-600 mt-2">Across all miners</div>
          </Card>

          <Card className="bg-[#6366F11A] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-2">TOTAL SUBMISSIONS</div>
            <div className="text-3xl font-bold text-gray-900">
              {leaderboardData.reduce((acc, curr) => acc + curr.submissions, 0).toLocaleString()}
            </div>
            <div className="text-xs text-gray-600 mt-2">Last 24 hours</div>
          </Card>

          <Card className="bg-[#FEEFFE] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-2">AVG EFFICIENCY</div>
            <div className="text-3xl font-bold text-gray-900">
              {(leaderboardData.reduce((acc, curr) => acc + curr.efficiency, 0) / leaderboardData.length).toFixed(1)}%
            </div>
            <div className="text-xs text-gray-600 mt-2">Network average</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;