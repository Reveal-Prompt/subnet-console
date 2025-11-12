import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { topMiners, performanceData, challengeMetrics, validators } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedChallenge, setSelectedChallenge] = useState("reverse-prompt");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Challenge Selector */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <h3 className="text-xs font-semibold tracking-wider mb-4">CHOOSE CHALLENGE TYPE</h3>
              <Tabs value={selectedChallenge} onValueChange={setSelectedChallenge}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="reverse-prompt" className="text-xs">REVERSE PROMPT</TabsTrigger>
                  <TabsTrigger value="style-extraction" className="text-xs">STYLE EXTRACT</TabsTrigger>
                  <TabsTrigger value="optimization" className="text-xs">OPTIMIZATION</TabsTrigger>
                </TabsList>
              </Tabs>
            </Card>

            {/* Network Reward */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-semibold tracking-wider">DAILY NETWORK REWARD</h3>
                <span className="text-2xl font-bold">~$2.8K</span>
              </div>
            </Card>

            {/* Top Miners */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xs font-semibold tracking-wider">TOP PERFORMING MINERS</h3>
                <span className="text-xs text-muted-foreground">Rolling avg ~1000 validations</span>
              </div>
              
              <div className="space-y-4">
                {topMiners.map((miner, idx) => (
                  <div key={miner.id} className="space-y-2 pb-4 border-b border-border last:border-0">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3 flex-1">
                        <span className="text-sm font-semibold w-6">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="flex-1">
                          <p className="font-mono text-sm font-medium">{miner.id}</p>
                          <p className="text-xs text-muted-foreground mt-1">{miner.submissions} submissions</p>
                          <p className={`text-xs mt-1 ${miner.status === 'ULTIMATE WINNER' ? 'text-accent font-semibold' : 'text-foreground font-medium'}`}>
                            {miner.status}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-bold">{miner.score}%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pl-9 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Efficiency:</span>
                        <span className="font-semibold">{miner.efficiency}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Consensus:</span>
                        <span className="font-semibold">{miner.consensusRate}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground pl-9">Updated {miner.updated}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Scores reflect weighted performance across semantic similarity, keyword extraction, context preservation, creativity, coherence, and response accuracy. Efficiency and validator consensus are key multipliers in the final ranking.
              </p>
              
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Winner takes largest share: the top miner receives 60% of epoch rewards, with diminishing shares for top 10 performers.
              </p>
            </Card>
          </div>

          {/* Right Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Chart */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xs font-semibold tracking-wider">NETWORK PERFORMANCE METRICS</h3>
                <span className="text-xs text-muted-foreground">Quality vs Efficiency Trends</span>
              </div>
              
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="period" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="quality" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={true} />
                  <Line type="monotone" dataKey="efficiency" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={true} />
                </LineChart>
              </ResponsiveContainer>
              
              <div className="flex gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="uppercase tracking-wide">Prompt Quality Score</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                  <span className="uppercase tracking-wide">Processing Efficiency</span>
                </div>
              </div>
            </Card>

            {/* Challenge Metrics Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Reverse Prompt Challenge */}
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">REVERSE PROMPT CHALLENGE</h3>
                  <span className="text-xs text-muted-foreground">Live metrics</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  Miners generate prompts from outputs. Evaluated on semantic matching, keyword precision, and creative reconstruction of original intent.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Semantic Similarity</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.semantic_similarity}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Keyword Extraction</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.keyword_extraction}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Context Preservation</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.context_preservation}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Creativity Score</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.creativity_score}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Prompt Coherence</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.prompt_coherence}%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="uppercase tracking-wide">Response Accuracy</span>
                    <span className="font-semibold">{challengeMetrics.reversePrompt.response_accuracy}%</span>
                  </div>
                </div>
              </Card>

              {/* Style Extraction Challenge */}
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">STYLE EXTRACTION CHALLENGE</h3>
                  <span className="text-xs text-muted-foreground">Live metrics</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  Extract and replicate writing styles from examples. Scored on style consistency, tonal accuracy, and structural pattern matching.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Semantic Similarity</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.semantic_similarity}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Keyword Extraction</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.keyword_extraction}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Context Preservation</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.context_preservation}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Creativity Score</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.creativity_score}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Prompt Coherence</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.prompt_coherence}%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="uppercase tracking-wide">Response Accuracy</span>
                    <span className="font-semibold">{challengeMetrics.styleExtraction.response_accuracy}%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sample Prompts Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">TOP REVERSE PROMPT EXAMPLE</h3>
                  <span className="text-xs text-muted-foreground">Winning submission</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Submitted 11/7/2025, 3:38:30 AM</p>
                
                <div className="bg-secondary/30 p-4 rounded border border-border min-h-[140px]">
                  <p className="text-xs font-mono leading-relaxed">
                    "Generate a comprehensive business analysis report focusing on Q4 market trends, emphasizing data-driven insights with visual charts, highlighting competitive positioning and actionable recommendations for strategic growth."
                  </p>
                </div>

                <div className="mt-4 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MINER</span>
                    <span className="font-mono">prompt_wizard_2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SCORE</span>
                    <span className="font-semibold text-accent">96.8%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">TOP STYLE EXTRACTION EXAMPLE</h3>
                  <span className="text-xs text-muted-foreground">Winning submission</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Submitted 11/11/2025 12:13:00</p>
                
                <div className="bg-secondary/30 p-4 rounded border border-border min-h-[140px]">
                  <p className="text-xs font-mono leading-relaxed">
                    "Adopt a conversational yet authoritative tone with technical depth. Use short paragraphs, incorporate rhetorical questions, employ data-backed assertions, and maintain approachable expertise throughout."
                  </p>
                </div>

                <div className="mt-4 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MINER</span>
                    <span className="font-mono">style_master_v3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SCORE</span>
                    <span className="font-semibold text-accent">95.2%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Active Validators */}
        <Card className="p-6 border border-border transition-shadow hover:shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-semibold tracking-wider">ACTIVE VALIDATORS</h3>
            <Button variant="outline" size="sm" className="text-xs">VIEW ALL</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {validators.map((validator) => (
              <Card key={validator.id} className="p-4 border border-border transition-shadow hover:shadow-sm">
                <div className="space-y-3">
                  <h4 className="font-mono text-sm font-semibold">{validator.id}...</h4>
                  <p className="text-xs text-muted-foreground">Last seen {validator.lastSeen}</p>
                  
                  <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wide">Validations</span>
                      <span className="font-semibold">{validator.validations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wide">Miners</span>
                      <span className="font-semibold">{validator.miners}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wide">Uptime</span>
                      <span className="font-semibold">{validator.uptime}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
