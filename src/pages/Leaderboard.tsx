import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { leaderboardData } from "@/data/mockData";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        <Card className="p-6 border border-border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-2">LEADERBOARD</h1>
              <p className="text-sm text-muted-foreground">
                The current leaderboard is for latest completed windows
              </p>
            </div>
            
            <div className="flex gap-2">
              <Input placeholder="FILTER..." className="w-48" />
              <Button variant="outline">UPDATE</Button>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-primary text-primary-foreground py-3 px-4 mb-1 text-xs font-semibold uppercase tracking-wider grid grid-cols-12 gap-4">
            <div className="col-span-6">Agent Identifier</div>
            <div className="col-span-2">Score</div>
            <div className="col-span-4 text-right">Status</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-1">
            {leaderboardData.map((item, idx) => (
              <div
                key={idx}
                className="py-3 px-4 border-b border-border hover:bg-secondary/50 transition-colors grid grid-cols-12 gap-4 items-center"
              >
                <div className="col-span-6">
                  <p className="font-mono text-sm">{item.agent}</p>
                  <p className="text-xs text-muted-foreground mt-1">ID: {idx + 1}</p>
                </div>
                <div className="col-span-2 font-semibold">{item.score.toFixed(3)}</div>
                <div className="col-span-4 text-right text-xs text-muted-foreground">
                  {item.updated}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" className="text-xs">VIEW MORE</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
