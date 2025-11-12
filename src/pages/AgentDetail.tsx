import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AgentDetail = () => {
  const [promptInput, setPromptInput] = useState("");
  const [challenge, setChallenge] = useState("reverse-prompt");
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleValidate = async () => {
    if (!promptInput.trim()) return;
    
    setIsValidating(true);
    
    // Simulate validation with mock results
    setTimeout(() => {
      const mockResult = {
        overallScore: 87.3 + Math.random() * 10,
        breakdown: {
          semantic_similarity: 85.2 + Math.random() * 10,
          keyword_extraction: 88.7 + Math.random() * 8,
          context_preservation: 84.5 + Math.random() * 12,
          creativity_score: 79.8 + Math.random() * 15,
          prompt_coherence: 91.2 + Math.random() * 6,
          response_accuracy: 86.4 + Math.random() * 10
        },
        validators: [
          { id: "5HK5tP6t2S59...", score: 88.1 + Math.random() * 8, latency: "142ms" },
          { id: "5DFWFPURRfAT...", score: 86.5 + Math.random() * 8, latency: "156ms" },
          { id: "5EP6ARDE6UYS...", score: 87.9 + Math.random() * 8, latency: "168ms" },
          { id: "5GWUX4I7DN6H...", score: 85.3 + Math.random() * 8, latency: "175ms" }
        ],
        technical: {
          processingTime: 145 + Math.floor(Math.random() * 50),
          tokenCount: Math.floor(promptInput.split(' ').length * 1.3),
          efficiency: 92.5 + Math.random() * 6,
          consensusRate: 93.8 + Math.random() * 5
        }
      };
      
      setResult(mockResult);
      setIsValidating(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto p-8">
        <Card className="p-8 border border-border">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">PROMPT VALIDATOR</h1>
            <p className="text-sm text-muted-foreground">
              Test your prompts against live validators before production deployment. Get instant feedback on quality, efficiency, and consensus scores.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label htmlFor="challenge" className="text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Challenge Type
                </label>
                <Select value={challenge} onValueChange={setChallenge}>
                  <SelectTrigger id="challenge">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reverse-prompt">Reverse Prompt</SelectItem>
                    <SelectItem value="style-extraction">Style Extraction</SelectItem>
                    <SelectItem value="optimization">Prompt Optimization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="prompt-input" className="text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Your Prompt
                </label>
                <Textarea
                  id="prompt-input"
                  placeholder="Enter your prompt here to test against validators..."
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Word count: {promptInput.split(' ').filter(w => w).length} | Character count: {promptInput.length}
                </p>
              </div>

              <Button 
                className="w-full" 
                onClick={handleValidate}
                disabled={isValidating || !promptInput.trim()}
              >
                {isValidating ? "VALIDATING..." : "VALIDATE PROMPT"}
              </Button>

              {/* Results Section */}
              {result && (
                <div className="space-y-6 pt-6 border-t border-border">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider mb-4">Validation Results</h3>
                    
                    {/* Overall Score */}
                    <Card className="p-6 border border-border mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold uppercase tracking-wide">Overall Score</span>
                        <span className="text-3xl font-bold text-accent">{result.overallScore.toFixed(1)}%</span>
                      </div>
                    </Card>

                    {/* Breakdown */}
                    <Card className="p-6 border border-border">
                      <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Score Breakdown</h4>
                      <div className="space-y-3 text-sm">
                        {Object.entries(result.breakdown).map(([key, value]: [string, any]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="uppercase tracking-wide text-xs">
                              {key.replace(/_/g, ' ')}
                            </span>
                            <div className="flex items-center gap-3">
                              <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-accent transition-all duration-500"
                                  style={{ width: `${value}%` }}
                                />
                              </div>
                              <span className="font-semibold w-12 text-right">{value.toFixed(1)}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>

            {/* Technical Metrics & Validator Consensus */}
            <div className="space-y-6">
              {result && (
                <>
                  {/* Technical Metrics */}
                  <Card className="p-6 border border-border">
                    <h3 className="text-xs font-semibold uppercase tracking-wider mb-4">Technical Metrics</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground uppercase tracking-wide text-xs">Processing Time</span>
                        <span className="font-mono font-semibold">{result.technical.processingTime}ms</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground uppercase tracking-wide text-xs">Token Count</span>
                        <span className="font-mono font-semibold">{result.technical.tokenCount}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground uppercase tracking-wide text-xs">Efficiency</span>
                        <span className="font-semibold">{result.technical.efficiency.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground uppercase tracking-wide text-xs">Consensus Rate</span>
                        <span className="font-semibold text-accent">{result.technical.consensusRate.toFixed(1)}%</span>
                      </div>
                    </div>
                  </Card>

                  {/* Validator Consensus */}
                  <Card className="p-6 border border-border">
                    <h3 className="text-xs font-semibold uppercase tracking-wider mb-4">Validator Consensus</h3>
                    <div className="space-y-3">
                      {result.validators.map((validator: any, idx: number) => (
                        <div key={idx} className="pb-3 border-b border-border last:border-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono text-xs">{validator.id}</span>
                            <span className="font-semibold text-sm">{validator.score.toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Latency</span>
                            <span className="text-xs font-mono text-muted-foreground">{validator.latency}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Recommendations */}
                  <Card className="p-6 border border-border bg-secondary/20">
                    <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">Recommendations</h3>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Your prompt shows {result.breakdown.creativity_score > 85 ? 'strong' : 'moderate'} creativity - consider {result.breakdown.creativity_score > 85 ? 'maintaining' : 'enhancing'} this aspect.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Coherence score is {result.breakdown.prompt_coherence > 90 ? 'excellent' : 'good'} - {result.breakdown.prompt_coherence > 90 ? 'ready for production' : 'minor refinements recommended'}.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Consensus rate of {result.technical.consensusRate.toFixed(1)}% indicates {result.technical.consensusRate > 92 ? 'strong' : 'moderate'} validator agreement.</span>
                      </li>
                    </ul>
                  </Card>
                </>
              )}

              {!result && (
                <Card className="p-6 border border-border bg-secondary/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">How It Works</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent">1.</span>
                      <span>Enter your prompt in the text area</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">2.</span>
                      <span>Select the challenge type you're targeting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">3.</span>
                      <span>Click validate to test against live validators</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">4.</span>
                      <span>Review scores, metrics, and recommendations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">5.</span>
                      <span>Iterate and improve before production submission</span>
                    </li>
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AgentDetail;
