import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { visionAgents, benchmarkData, trackMetrics, validators } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedAgent, setSelectedAgent] = useState("football");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Vision Agent Selector */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <h3 className="text-xs font-semibold tracking-wider mb-4">CHOOSE VISION AGENT</h3>
              <Tabs value={selectedAgent} onValueChange={setSelectedAgent}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="football" className="text-xs">FOOTBALL</TabsTrigger>
                  <TabsTrigger value="cricket" className="text-xs">CRICKET</TabsTrigger>
                  <TabsTrigger value="forecourt" className="text-xs">FORECOURT OPS</TabsTrigger>
                </TabsList>
              </Tabs>
            </Card>

            {/* Daily Reward */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-semibold tracking-wider">DAILY REWARD</h3>
                <span className="text-2xl font-bold">~$1.5K</span>
              </div>
            </Card>

            {/* Top Public Agents */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xs font-semibold tracking-wider">TOP PUBLIC AGENTS</h3>
                <span className="text-xs text-muted-foreground">Rolling avg ~90 (+ 28,800 blocks)</span>
              </div>
              
              <div className="space-y-4">
                {visionAgents.map((agent, idx) => (
                  <div key={agent.id} className="space-y-2 pb-4 border-b border-border last:border-0">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3 flex-1">
                        <span className="text-sm font-semibold w-6">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="flex-1">
                          <p className="font-mono text-sm font-medium">{agent.id}</p>
                          <p className="text-xs text-muted-foreground mt-1">Skylines{agent.samples}</p>
                          <p className={`text-xs mt-1 ${agent.status === 'ULTIMATE WINNER' ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                            {agent.status}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-bold">{agent.accuracy}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground pl-9">Updated {agent.updated}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Scores reflect the stake-weighted combined accuracy from the latest 2400 blocks using a staler+MAD guard, then averaged using staler^1.5 sample^0.5 weights. The leaderboard orders agents by the rolling combined score across this window.
              </p>
              
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Winner takes all: the leading agent receives the full reward weight for the epoch, while other agents score for visibility only.
              </p>
            </Card>
          </div>

          {/* Right Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Benchmark Chart */}
            <Card className="p-6 border border-border transition-shadow hover:shadow-md">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xs font-semibold tracking-wider">BENCHMARK ACCURACY</h3>
                <span className="text-xs text-muted-foreground">Accuracy vs Human Gold-Label</span>
              </div>
              
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={benchmarkData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="public" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={true} />
                  <Line type="monotone" dataKey="private" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={true} />
                </LineChart>
              </ResponsiveContainer>
              
              <div className="flex gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="uppercase tracking-wide">Public Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                  <span className="uppercase tracking-wide">Private Track</span>
                </div>
              </div>
            </Card>

            {/* Track Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Public Track */}
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">PUBLIC TRACK</h3>
                  <span className="text-xs text-muted-foreground">Open benchmark</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  Agents running on the public track. Models are public and available on Hugging Face. Running on model 1.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Enumeration</span>
                    <span className="font-semibold">{trackMetrics.public.objects_enumeration}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : BBox_Placement</span>
                    <span className="font-semibold">{trackMetrics.public.objects_bbox_placement}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Team</span>
                    <span className="font-semibold">{trackMetrics.public.objects_team}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Categorisation</span>
                    <span className="font-semibold">{trackMetrics.public.objects_categorisation}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Tracking_Stability</span>
                    <span className="font-semibold">{trackMetrics.public.objects_tracking_stability}%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="uppercase tracking-wide">Keypoints : Floor_Markings_Alignment</span>
                    <span className="font-semibold">{trackMetrics.public.keypoints_floor_markings_alignment}%</span>
                  </div>
                </div>
              </Card>

              {/* Private Track */}
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">PRIVATE TRACK</h3>
                  <span className="text-xs text-muted-foreground">Lab benchmark</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  Full visual agents being private track. Models are private by default and soon to be running on TEE. Mocked 0.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Enumeration</span>
                    <span className="font-semibold">{trackMetrics.private.objects_enumeration}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Team</span>
                    <span className="font-semibold">{trackMetrics.private.objects_team}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : BBox_Placement</span>
                    <span className="font-semibold">{trackMetrics.private.objects_bbox_placement}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Categorisation</span>
                    <span className="font-semibold">{trackMetrics.private.objects_categorisation}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="uppercase tracking-wide">Objects : Tracking_Stability</span>
                    <span className="font-semibold">{trackMetrics.private.objects_tracking_stability}%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="uppercase tracking-wide">Keypoints : Floor_Markings_Alignment</span>
                    <span className="font-semibold">{trackMetrics.private.keypoints_floor_markings_alignment}%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Video Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">PUBLIC TRACK VISUALISATION</h3>
                  <span className="text-xs text-muted-foreground">Winning Agent</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Uploaded 11/7/2025, 3:38:30 AM</p>
                
                <div className="bg-black aspect-video rounded flex items-center justify-center">
                  <span className="text-white text-sm">Video Player</span>
                </div>

                <div className="mt-4 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AGENT</span>
                    <span className="font-mono">manupppp423~turbovision~manuppp23~gdkl1n</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">HOTKEY</span>
                    <span className="font-mono">5OKc3hxJ5B...</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border transition-shadow hover:shadow-md">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xs font-semibold tracking-wider">PRIVATE TRACK VISUALISATION</h3>
                  <span className="text-xs text-muted-foreground">Winning Agent</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Uploaded 11/11/2025 12:13:00</p>
                
                <div className="bg-black aspect-video rounded flex items-center justify-center">
                  <span className="text-white text-sm">Video Player</span>
                </div>

                <div className="mt-4 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AGENT</span>
                    <span>—</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">HOTKEY</span>
                    <span className="font-mono">5KnnsS8gdi...</span>
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
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wide">Shards</span>
                      <span className="font-semibold">{validator.shards}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wide">Miners</span>
                      <span className="font-semibold">{validator.miners}</span>
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
