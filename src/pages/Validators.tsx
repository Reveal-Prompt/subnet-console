import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data
const validators = [
  { 
    id: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
    validations: 15234, 
    miners: 127, 
    uptime: 99.8, 
    lastSeen: "1 min ago",
    avgScore: 94.2,
    median: 93.8,
    avgLatency: "145ms",
    consensusRate: 98.5
  },
  { 
    id: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty", 
    validations: 14891, 
    miners: 119, 
    uptime: 99.5, 
    lastSeen: "3 min ago",
    avgScore: 93.7,
    median: 93.2,
    avgLatency: "152ms",
    consensusRate: 97.8
  },
  { 
    id: "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL", 
    validations: 13567, 
    miners: 112, 
    uptime: 98.9, 
    lastSeen: "5 min ago",
    avgScore: 92.9,
    median: 92.5,
    avgLatency: "163ms",
    consensusRate: 96.9
  },
  { 
    id: "5DAAnrj7VHTznn2AWBemMuyBxy8FDpqxJsYU7NXeqHuSRDfQ", 
    validations: 12943, 
    miners: 108, 
    uptime: 99.2, 
    lastSeen: "2 min ago",
    avgScore: 93.4,
    median: 93.1,
    avgLatency: "158ms",
    consensusRate: 97.3
  },
  { 
    id: "5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw", 
    validations: 11832, 
    miners: 102, 
    uptime: 98.7, 
    lastSeen: "7 min ago",
    avgScore: 92.1,
    median: 91.8,
    avgLatency: "171ms",
    consensusRate: 96.2
  },
  { 
    id: "5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y", 
    validations: 10921, 
    miners: 98, 
    uptime: 99.1, 
    lastSeen: "4 min ago",
    avgScore: 91.8,
    median: 91.4,
    avgLatency: "176ms",
    consensusRate: 95.8
  }
];

const Validators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-white">
      <div className="max-w-[1400px] mx-auto p-8 space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Validator Activity
          </h1>
          <p className="text-gray-600 text-sm">Real-time monitoring of validator performance and consensus metrics over the past 72 hours</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <Card className="bg-[#6366F11A] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-3">ACTIVE VALIDATORS</div>
            <div className="text-3xl font-bold text-gray-900">{validators.length}</div>
            <div className="text-xs text-gray-600 mt-2">Currently online</div>
          </Card>

          <Card className="bg-[#FEEFFE] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-3">TOTAL VALIDATIONS</div>
            <div className="text-3xl font-bold text-gray-900">
              {(validators.reduce((acc, v) => acc + v.validations, 0) / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-gray-600 mt-2">Last 72 hours</div>
          </Card>

          <Card className="bg-[#6366F11A] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-3">AVG UPTIME</div>
            <div className="text-3xl font-bold text-gray-900">
              {(validators.reduce((acc, v) => acc + v.uptime, 0) / validators.length).toFixed(1)}%
            </div>
            <div className="text-xs text-gray-600 mt-2">Network average</div>
          </Card>

          <Card className="bg-[#FEEFFE] shadow-md p-6">
            <div className="text-xs font-semibold text-gray-600 mb-3">AVG CONSENSUS</div>
            <div className="text-3xl font-bold text-gray-900">
              {(validators.reduce((acc, v) => acc + v.consensusRate, 0) / validators.length).toFixed(1)}%
            </div>
            <div className="text-xs text-gray-600 mt-2">Network average</div>
          </Card>
        </div>

        {/* Validators List */}
        <Card className="bg-white shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-1">Validator Nodes</h2>
                <p className="text-xs text-gray-500">Detailed performance metrics for each validator</p>
              </div>
              <Button variant="outline" className="text-xs border-blue-300 text-blue-600 hover:bg-blue-50">
                Refresh
              </Button>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {validators.map((validator, idx) => (
              <div
                key={validator.id}
                className="p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Validator Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-900">#{idx + 1}</span>
                      <h3 className="font-mono text-sm font-medium text-gray-900 truncate">{validator.id}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Active {validator.lastSeen}</span>
                      <span>•</span>
                      <span>{validator.validations.toLocaleString()} validations</span>
                      <span>•</span>
                      <span>{validator.miners} miners</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Avg Score</p>
                      <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">{validator.avgScore}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Median</p>
                      <p className="text-sm font-semibold text-gray-900">{validator.median}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Latency</p>
                      <p className="text-sm font-semibold font-mono text-gray-900">{validator.avgLatency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Consensus</p>
                      <p className="text-sm font-semibold text-gray-900">{validator.consensusRate}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Uptime</p>
                      <p className="text-sm font-semibold text-blue-600">{validator.uptime}%</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs border-blue-300 text-blue-600 hover:bg-blue-50 lg:ml-4"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Breakdown */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card className="bg-[#6366F11A] shadow-md p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Top Performers</h3>
            <div className="space-y-3">
              {validators.slice(0, 3).map((v, idx) => (
                <div key={v.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm">{idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}</span>
                    <span className="font-mono text-xs text-gray-900 truncate">{v.id.substring(0, 20)}...</span>
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">{v.avgScore}%</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-[#FEEFFE] shadow-md p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Fastest Response</h3>
            <div className="space-y-3">
              {[...validators].sort((a, b) => parseInt(a.avgLatency) - parseInt(b.avgLatency)).slice(0, 3).map((v, idx) => (
                <div key={v.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-semibold text-gray-500">#{idx + 1}</span>
                    <span className="font-mono text-xs text-gray-900 truncate">{v.id.substring(0, 20)}...</span>
                  </div>
                  <span className="text-sm font-mono font-semibold text-gray-900">{v.avgLatency}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-[#6366F11A] shadow-md p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Highest Uptime</h3>
            <div className="space-y-3">
              {[...validators].sort((a, b) => b.uptime - a.uptime).slice(0, 3).map((v, idx) => (
                <div key={v.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-semibold text-gray-500">#{idx + 1}</span>
                    <span className="font-mono text-xs text-gray-900 truncate">{v.id.substring(0, 20)}...</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{v.uptime}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Validators;