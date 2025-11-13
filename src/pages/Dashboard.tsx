import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-white">
      <div className="max-w-[1600px] mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Network Dashboard
          </h1> */}
          {/* <p className="text-gray-600 text-sm">Real-time performance metrics and leaderboard</p> */}
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1: Top Stats */}
<Card className="col-span-12 lg:col-span-3 bg-[#FEEFFE] border-0 p-6 text-slate-800 shadow-lg hover:shadow-xl transition-shadow">

            <div className="text-xs font-semibold tracking-wider mb-2">DAILY NETWORK REWARD</div>
            <div className="text-4xl font-bold">$2.8K</div>
            <div className="text-xs opacity-80 mt-2">+12.5% from yesterday</div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-[#6366F11A] border-0 p-6 text-black shadow-lg hover:shadow-xl transition-shadow ">
            <div className="text-xs font-semibold tracking-wider  mb-2">ACTIVE MINERS</div>
            <div className="text-4xl font-bold">247</div>
            <div className="text-xs mt-2">Across all challenges</div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-[#FEEFFE] border-0 p-6 text-blck shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-xs font-semibold tracking-wider opacity-90 mb-2">TOTAL VALIDATIONS</div>
            <div className="text-4xl font-bold">56.6K</div>
            <div className="text-xs opacity-80 mt-2">Last 24 hours</div>
          </Card>

          <Card className="col-span-12 lg:col-span-3 bg-[#6366F11A] border-0 p-6 text-black shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-xs font-semibold tracking-wider opacity-90 mb-2">AVG QUALITY SCORE</div>
            <div className="text-4xl font-bold">94%</div>
            <div className="text-xs opacity-80 mt-2">Network-wide average</div>
          </Card>

          {/* Row 2: Challenge Selector */}
          <Card className="col-span-12 bg-white border-blue-200 shadow-md p-6">
            <h3 className="text-xs font-semibold tracking-wider text-gray-800 mb-4">CHALLENGE TYPE SELECTOR</h3>
            <Tabs value={selectedChallenge} onValueChange={setSelectedChallenge}>
              <TabsList className="grid grid-cols-3 w-full max-w-md bg-blue-50">
                <TabsTrigger value="reverse-prompt" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
                  REVERSE PROMPT
                </TabsTrigger>
                <TabsTrigger value="style-extraction" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
                  STYLE EXTRACT
                </TabsTrigger>
                <TabsTrigger value="optimization" className="text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
                  OPTIMIZATION
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>

          {/* Row 3: Performance Chart */}
          <Card className="col-span-12 lg:col-span-8 bg-white border-blue-200 shadow-md p-6">
            <div className="flex justify-between items-baseline mb-6">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">NETWORK PERFORMANCE TRENDS</h3>
              <span className="text-xs text-gray-500">6-Week Rolling Average</span>
            </div>
            
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="period" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Line type="monotone" dataKey="quality" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
                <Line type="monotone" dataKey="efficiency" stroke="#ec4899" strokeWidth={3} dot={{ fill: '#ec4899', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="flex gap-8 mt-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="uppercase tracking-wide text-gray-700">Prompt Quality Score</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                <span className="uppercase tracking-wide text-gray-700">Processing Efficiency</span>
              </div>
            </div>
          </Card>

          {/* Row 3: Top Miners Leaderboard */}
          <Card className="col-span-12 lg:col-span-4 bg-white border-blue-200 shadow-md p-6">
            <div className="flex justify-between items-baseline mb-6">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">LEADERBOARD</h3>
              <span className="text-xs text-gray-500">Top 3</span>
            </div>
            
            <div className="space-y-4">
              {topMiners.map((miner, idx) => (
                <div key={miner.id} className={`p-4 rounded-xl ${idx === 0 ? 'bg-gradient-to-br from-blue-100 to-pink-100 border-2 border-blue-300' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">
                      {idx === 0 ? '🏆' : idx === 1 ? '🥈' : '🥉'}
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-sm font-semibold text-gray-800">{miner.id}</p>
                      <p className="text-xs text-gray-500">{miner.submissions} submissions</p>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                      {miner.score}%
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficiency:</span>
                      <span className="font-semibold text-gray-800">{miner.efficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consensus:</span>
                      <span className="font-semibold text-gray-800">{miner.consensusRate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Row 4: Challenge Metrics */}
          <Card className="col-span-12 lg:col-span-6 bg-[#6366F11A]  shadow-md p-6">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">REVERSE PROMPT METRICS</h3>
              <span className="text-xs text-gray-500">Live data</span>
            </div>
            
            <p className="text-xs text-gray-600 mb-6">
              Miners generate prompts from outputs. Evaluated on semantic matching, keyword precision, and creative reconstruction.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {Object.entries(challengeMetrics.reversePrompt).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-lg ">
                  <div className="text-xs uppercase tracking-wide text-gray-600 mb-2">
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="col-span-12 lg:col-span-6 bg-[#FEEFFE] shadow-md p-6">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">STYLE EXTRACTION METRICS</h3>
              <span className="text-xs text-gray-500">Live data</span>
            </div>
            
            <p className="text-xs text-gray-600 mb-6">
              Extract and replicate writing styles. Scored on style consistency, tonal accuracy, and structural patterns.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {Object.entries(challengeMetrics.styleExtraction).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-xs uppercase tracking-wide text-gray-600 mb-2">
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    {value}%
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Row 5: Sample Prompts */}
          <Card className="col-span-12 lg:col-span-6 bg-white border-blue-200 shadow-md p-6">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">TOP REVERSE PROMPT</h3>
              <span className="text-xs font-semibold text-blue-600">96.8% Score</span>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg border-2 border-blue-200 mb-4">
              <p className="text-sm font-mono leading-relaxed text-gray-800">
                "Generate a comprehensive business analysis report focusing on Q4 market trends, emphasizing data-driven insights with visual charts, highlighting competitive positioning and actionable recommendations for strategic growth."
              </p>
            </div>

            <div className="flex justify-between text-xs">
              <div>
                <span className="text-gray-600">Miner: </span>
                <span className="font-mono text-gray-800 font-semibold">prompt_wizard_2024</span>
              </div>
              <span className="text-gray-500">Submitted 11/7/2025, 3:38 AM</span>
            </div>
          </Card>

          <Card className="col-span-12 lg:col-span-6 bg-white border-pink-200 shadow-md p-6">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">TOP STYLE EXTRACTION</h3>
              <span className="text-xs font-semibold text-pink-600">95.2% Score</span>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-white p-5 rounded-lg border-2 border-pink-200 mb-4">
              <p className="text-sm font-mono leading-relaxed text-gray-800">
                "Adopt a conversational yet authoritative tone with technical depth. Use short paragraphs, incorporate rhetorical questions, employ data-backed assertions, and maintain approachable expertise throughout."
              </p>
            </div>

            <div className="flex justify-between text-xs">
              <div>
                <span className="text-gray-600">Miner: </span>
                <span className="font-mono text-gray-800 font-semibold">style_master_v3</span>
              </div>
              <span className="text-gray-500">Submitted 11/11/2025, 12:13 PM</span>
            </div>
          </Card>

          {/* Row 6: Active Validators */}
          <Card className="col-span-12 bg-white border-blue-200 shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-semibold tracking-wider text-gray-800">ACTIVE VALIDATORS</h3>
              <Link to="/validators" className="text-xs font-semibold text-blue-600 hover:underline">
                VIEW ALL
              </Link>
             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {validators.map((validator) => (
                <div key={validator.id} className="bg-gradient-to-br from-blue-50 to-pink-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                  <h4 className="font-mono text-sm font-semibold text-gray-800 mb-1">{validator.id}...</h4>
                  <p className="text-xs text-gray-600 mb-4">Active {validator.lastSeen}</p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Validations</span>
                      <span className="font-semibold text-gray-800">{validator.validations.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Miners</span>
                      <span className="font-semibold text-gray-800">{validator.miners}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Uptime</span>
                      <span className="font-semibold text-blue-600">{validator.uptime}%</span>
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