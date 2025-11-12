import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { validators } from "@/data/mockData";

const Validators = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        <Card className="p-8 border border-border">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">VALIDATOR ACTIVITY</h1>
            <p className="text-sm text-muted-foreground">
              Real-time monitoring of validator performance and consensus metrics over the past 72 hours.
            </p>
          </div>

          <div className="space-y-6">
            {validators.map((validator) => (
              <Card
                key={validator.id}
                className="p-6 border border-border hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-mono text-lg font-semibold mb-2">{validator.id}</h3>
                    <p className="text-xs text-muted-foreground">
                      Last seen {validator.lastSeen}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {validator.validations} validations · {validator.miners} active miners
                    </p>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center lg:text-right">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Avg Score
                      </p>
                      <p className="font-semibold text-accent">{validator.avgScore}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Median
                      </p>
                      <p className="font-semibold">{validator.median}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Latency
                      </p>
                      <p className="font-semibold font-mono text-sm">{validator.avgLatency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Consensus
                      </p>
                      <p className="font-semibold">{validator.consensusRate}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Uptime
                      </p>
                      <p className="font-semibold">{validator.uptime}%</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="lg:ml-4">
                    VIEW DETAILS
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Validators;
