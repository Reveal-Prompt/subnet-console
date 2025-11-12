import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AgentDetail = () => {
  const [agentHotkey, setAgentHotkey] = useState("");
  const [challenge, setChallenge] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        <Card className="p-8 border border-border">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">AGENT DETAIL</h1>
            <p className="text-sm text-muted-foreground">
              Inspect an agent's latest combined score, validator agreement, and historical trend.
            </p>
          </div>

          <div className="max-w-2xl">
            <div className="flex gap-4 items-end mb-8">
              <div className="flex-1">
                <label htmlFor="agent-hotkey" className="text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Agent hotkey
                </label>
                <Input
                  id="agent-hotkey"
                  placeholder="Agent hotkey"
                  value={agentHotkey}
                  onChange={(e) => setAgentHotkey(e.target.value)}
                  className="font-mono"
                />
              </div>

              <div className="w-64">
                <label htmlFor="challenge" className="text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Challenge
                </label>
                <Select value={challenge} onValueChange={setChallenge}>
                  <SelectTrigger id="challenge">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Challenges</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="forecourt">Forecourt OPS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="px-8">LOAD</Button>
            </div>

            <div className="text-center py-16 text-muted-foreground">
              <p className="text-sm">
                Enter an agent hotkey above to see their combined score, validator spread, and trendline.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AgentDetail;
