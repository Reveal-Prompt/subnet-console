import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

// Mock data
const topMiners = [
  { id: "prompt_wizard_2024", score: 96.8, efficiency: 94.5, consensusRate: 98.2, submissions: 1247, status: "ULTIMATE WINNER", updated: "2 min ago" },
  { id: "style_master_v3", score: 95.2, efficiency: 92.8, consensusRate: 96.7, submissions: 1103, status: "TOP PERFORMER", updated: "5 min ago" },
  { id: "semantic_sage_pro", score: 93.7, efficiency: 91.2, consensusRate: 95.4, submissions: 989, status: "TOP PERFORMER", updated: "8 min ago" }
];

const performanceData = [
  { period: "W1", quality: 85, efficiency: 78 },
  { period: "W2", quality: 87, efficiency: 82 },
  { period: "W3", quality: 89, efficiency: 85 },
  { period: "W4", quality: 91, efficiency: 88 },
  { period: "W5", quality: 93, efficiency: 90 },
  { period: "W6", quality: 94, efficiency: 92 }
];

const challengeMetrics = {
  reversePrompt: {
    semantic_similarity: 94.2,
    keyword_extraction: 91.8,
    context_preservation: 93.5,
    creativity_score: 89.7,
    prompt_coherence: 95.1,
    response_accuracy: 92.4
  },
  styleExtraction: {
    semantic_similarity: 92.8,
    keyword_extraction: 90.5,
    context_preservation: 91.2,
    creativity_score: 93.4,
    prompt_coherence: 94.3,
    response_accuracy: 90.1
  }
};

const validators = [
  { id: "5GrwvaEF5zXb26Fz9rcQpDWS", validations: 15234, miners: 127, uptime: 99.8, lastSeen: "1 min ago" },
  { id: "5FHneW46xGXgs5mUiveU4sbT", validations: 14891, miners: 119, uptime: 99.5, lastSeen: "3 min ago" },
  { id: "5CiPPseXPECbkjWCa6MnjNok", validations: 13567, miners: 112, uptime: 98.9, lastSeen: "5 min ago" },
  { id: "5DAAnrj7VHTznn2AWBemMuyB", validations: 12943, miners: 108, uptime: 99.2, lastSeen: "2 min ago" }
];

const Dashboard = () => {
  const [selectedChallenge, setSelectedChallenge] = useState("reverse-prompt");

  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-slate-900 mb-1">
            Network Dashboard
          </h1>
          <p className="text-slate-500 text-sm">Real-time performance metrics and leaderboard</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Row 1: Top Stats */}
          <Card className="col-span-12 lg:col-span-3 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-medium tracking-wide text-slate-500 mb-3">DAILY NETWORK REWARD</div>
            <div className="text-3xl font-semibold text-slate-900">$2.8K</div>
            <div className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <span>↑</span>
              <span>12.5% from yesterday</span>
            </div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-medium tracking-wide text-slate-500 mb-3">ACTIVE MINERS</div>
            <div className="text-3xl font-semibold text-slate-900">247</div>
            <div className="text-xs text-slate-500 mt-2">Across all challenges</div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-medium tracking-wide text-slate-500 mb-3">TOTAL VALIDATIONS</div>
            <div className="text-3xl font-semibold text-slate-900">56.6K</div>
            <div className="text-xs text-slate-500 mt-2">Last 24 hours</div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-xs font-medium tracking-wide text-slate-500 mb-3">AVG QUALITY SCORE</div>
            <div className="text-3xl font-semibold text-slate-900">94%</div>
            <div className="text-xs text-slate-500 mt-2">Network-wide average</div>
          </Card>

          {/* Row 2: Challenge Selector */}
          <Card className="col-span-12 bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="text-xs font-medium tracking-wide text-slate-700 mb-4">CHALLENGE TYPE</h3>
            <Tabs value={selectedChallenge} onValueChange={setSelectedChallenge}>
              <TabsList className="grid grid-cols-3 w-full bg-slate-100 p-1">
                <TabsTrigger value="reverse-prompt" className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
                  Reverse Prompt
                </TabsTrigger>
                <TabsTrigger value="style-extraction" className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
                  Style Extract
                </TabsTrigger>
                <TabsTrigger value="optimization" className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
                  Optimization
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>

          {/* Row 3: Performance Chart */}
          <Card className="col-span-12 lg:col-span-8 bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">Network Performance Trends</h3>
                <p className="text-xs text-slate-500">6-week rolling average</p>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={false}
                />
                <YAxis 
                  domain={[0, 100]} 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="quality" 
                  stroke="#3b82f6" 
                  strokeWidth={2.5} 
                  dot={{ fill: '#3b82f6', r: 4, strokeWidth: 0 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#8b5cf6" 
                  strokeWidth={2.5} 
                  dot={{ fill: '#8b5cf6', r: 4, strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="flex gap-8 mt-8 text-xs border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-slate-600">Prompt Quality Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <span className="text-slate-600">Processing Efficiency</span>
              </div>
            </div>
          </Card>

          {/* Row 3: Top Miners Leaderboard */}
          <Card className="col-span-12 lg:col-span-4 bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-slate-900">Leaderboard</h3>
              <span className="text-xs text-slate-500">Top 3</span>
            </div>
            
            <div className="space-y-4">
              {topMiners.map((miner, idx) => (
                <div key={miner.id} className={`p-4 rounded-lg border ${idx === 0 ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl">
                      {idx === 0 ? '🏆' : idx === 1 ? '🥈' : '🥉'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-slate-900 truncate">{miner.id}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{miner.submissions.toLocaleString()} submissions</p>
                    </div>
                    <span className="text-xl font-semibold text-slate-900">
                      {miner.score}%
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-200">
                    <div>
                      <span className="text-slate-500 block mb-1">Efficiency</span>
                      <span className="font-semibold text-slate-900">{miner.efficiency}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-1">Consensus</span>
                      <span className="font-semibold text-slate-900">{miner.consensusRate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Row 4: Challenge Metrics */}
          <Card className="col-span-12 lg:col-span-6 bg-white border border-slate-200 shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Reverse Prompt Metrics</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Miners generate prompts from outputs. Evaluated on semantic matching, keyword precision, and creative reconstruction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(challengeMetrics.reversePrompt).map(([key, value]) => (
                <div key={key} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">
                    {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div className="text-2xl font-semibold text-slate-900">
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="col-span-12 lg:col-span-6 bg-white border border-slate-200 shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Style Extraction Metrics</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Extract and replicate writing styles. Scored on style consistency, tonal accuracy, and structural patterns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(challengeMetrics.styleExtraction).map(([key, value]) => (
                <div key={key} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">
                    {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div className="text-2xl font-semibold text-slate-900">
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Row 5: Sample Prompts */}
          <Card className="col-span-12 lg:col-span-6 bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-slate-900">Top Reverse Prompt</h3>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">96.8% Score</span>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-4">
              <p className="text-sm font-mono leading-relaxed text-slate-700">
                "Generate a comprehensive business analysis report focusing on Q4 market trends, emphasizing data-driven insights with visual charts, highlighting competitive positioning and actionable recommendations for strategic growth."
              </p>
            </div>

            <div className="flex justify-between items-center text-xs pt-4 border-t border-slate-100">
              <div>
                <span className="text-slate-500">Miner: </span>
                <span className="font-mono text-slate-900 font-medium">prompt_wizard_2024</span>
              </div>
              <span className="text-slate-400">11/7/2025, 3:38 AM</span>
            </div>
          </Card>

          <Card className="col-span-12 lg:col-span-6 bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-slate-900">Top Style Extraction</h3>
              <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded">95.2% Score</span>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-4">
              <p className="text-sm font-mono leading-relaxed text-slate-700">
                "Adopt a conversational yet authoritative tone with technical depth. Use short paragraphs, incorporate rhetorical questions, employ data-backed assertions, and maintain approachable expertise throughout."
              </p>
            </div>

            <div className="flex justify-between items-center text-xs pt-4 border-t border-slate-100">
              <div>
                <span className="text-slate-500">Miner: </span>
                <span className="font-mono text-slate-900 font-medium">style_master_v3</span>
              </div>
              <span className="text-slate-400">11/11/2025, 12:13 PM</span>
            </div>
          </Card>

          {/* Row 6: Active Validators */}
          <Card className="col-span-12 bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-slate-900">Active Validators</h3>
              <Button variant="outline" size="sm" className="text-xs border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {validators.map((validator) => (
                <div key={validator.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                  <div className="mb-4">
                    <h4 className="font-mono text-sm font-medium text-slate-900 truncate mb-1">{validator.id.substring(0, 20)}...</h4>
                    <p className="text-xs text-slate-500">Active {validator.lastSeen}</p>
                  </div>
                  
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Validations</span>
                      <span className="font-semibold text-slate-900">{validator.validations.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Miners</span>
                      <span className="font-semibold text-slate-900">{validator.miners}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                      <span className="text-slate-500">Uptime</span>
                      <span className="font-semibold text-green-600">{validator.uptime}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;