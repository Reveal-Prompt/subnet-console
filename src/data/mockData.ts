export const challengeTypes = ["reverse-prompt", "style-extraction", "prompt-optimization"];

export const topMiners = [
  {
    id: "miner_prompt_master_420",
    score: 94.8,
    submissions: 1847,
    status: "ULTIMATE WINNER",
    updated: "12/11/2025, 21:20:47",
    efficiency: 98.2,
    consensusRate: 96.5
  },
  {
    id: "optimized_prompts_x9",
    score: 89.3,
    submissions: 1623,
    status: "TOP PERFORMER",
    updated: "12/11/2025, 21:22:02",
    efficiency: 95.7,
    consensusRate: 92.1
  }
];

export const performanceData = [
  { period: "Nov 3", quality: 85, efficiency: 91 },
  { period: "Nov 4", quality: 87, efficiency: 92 },
  { period: "Nov 5", quality: 86, efficiency: 90 },
  { period: "Nov 6", quality: 88, efficiency: 93 },
  { period: "Nov 7", quality: 87, efficiency: 91 },
  { period: "Nov 8", quality: 89, efficiency: 92 },
  { period: "Nov 9", quality: 88, efficiency: 91 },
  { period: "Nov 10", quality: 90, efficiency: 93 },
  { period: "Nov 11", quality: 91, efficiency: 94 },
  { period: "Nov 12", quality: 90, efficiency: 93 }
];

export const challengeMetrics = {
  reversePrompt: {
    semantic_similarity: 91.2,
    keyword_extraction: 88.5,
    context_preservation: 85.7,
    creativity_score: 79.3,
    prompt_coherence: 92.1,
    response_accuracy: 87.4
  },
  styleExtraction: {
    semantic_similarity: 89.8,
    keyword_extraction: 91.2,
    context_preservation: 87.9,
    creativity_score: 82.5,
    prompt_coherence: 88.6,
    response_accuracy: 90.1
  }
};

export const validators = [
  {
    id: "5HK5tP6t2S59DyWMHRWPBVJEJ8G6T1KJURYQEOQJ8SREPEN",
    lastSeen: "21:28:48, 12/11/2025 (23 minutes ago)",
    validations: 3847,
    miners: 127,
    avgScore: 88.4,
    median: 89.2,
    avgLatency: "142 ms",
    consensusRate: 94.2,
    uptime: 99.8
  },
  {
    id: "5DFWFPURRfAT5VTJDSATUNRAKGHVUDGCGHf61457QBWDP",
    lastSeen: "21:22:02, 12/11/2025 (30 minutes ago)",
    validations: 3621,
    miners: 115,
    avgScore: 87.1,
    median: 88.5,
    avgLatency: "156 ms",
    consensusRate: 92.8,
    uptime: 99.5
  },
  {
    id: "5EP6ARDE6UYSWaGaTDENKCESS7ZWNMRNtSE1XMNMHYRIB",
    lastSeen: "19:14:55, 12/11/2025 (2 hours ago)",
    validations: 3294,
    miners: 108,
    avgScore: 86.7,
    median: 87.9,
    avgLatency: "168 ms",
    consensusRate: 91.5,
    uptime: 99.2
  },
  {
    id: "5GWUX4I7DN6HJEVxL9K1GYEZy4HB7PTtEGNBt5RPEABKD",
    lastSeen: "18:58:27, 12/11/2025 (2 hours ago)",
    validations: 2986,
    miners: 94,
    avgScore: 85.9,
    median: 86.8,
    avgLatency: "175 ms",
    consensusRate: 90.2,
    uptime: 98.9
  }
];

export const leaderboardData = [
  { miner: "prompt_wizard_2024", score: 94.185, submissions: 2341, avgLatency: "128ms", efficiency: 97.2, updated: "2 minutes ago" },
  { miner: "style_master_v3", score: 93.487, submissions: 2198, avgLatency: "134ms", efficiency: 96.8, updated: "5 minutes ago" },
  { miner: "optimization_king", score: 92.684, submissions: 2087, avgLatency: "142ms", efficiency: 96.1, updated: "8 minutes ago" },
  { miner: "reverse_prompt_pro", score: 91.983, submissions: 1956, avgLatency: "139ms", efficiency: 95.9, updated: "12 minutes ago" },
  { miner: "semantic_genius_x", score: 91.590, submissions: 1843, avgLatency: "145ms", efficiency: 95.4, updated: "15 minutes ago" },
  { miner: "prompt_optimizer_42", score: 90.780, submissions: 1729, avgLatency: "151ms", efficiency: 94.8, updated: "18 minutes ago" },
  { miner: "creative_prompts_ai", score: 90.290, submissions: 1654, avgLatency: "148ms", efficiency: 94.5, updated: "22 minutes ago" },
  { miner: "context_keeper_v2", score: 89.873, submissions: 1587, avgLatency: "156ms", efficiency: 93.9, updated: "25 minutes ago" },
  { miner: "efficiency_master", score: 89.410, submissions: 1502, avgLatency: "144ms", efficiency: 96.2, updated: "28 minutes ago" },
  { miner: "balanced_prompts_z", score: 88.992, submissions: 1445, avgLatency: "159ms", efficiency: 93.2, updated: "31 minutes ago" },
  { miner: "keyword_extractor", score: 88.574, submissions: 1398, avgLatency: "162ms", efficiency: 92.8, updated: "35 minutes ago" },
  { miner: "style_analyzer_pro", score: 88.173, submissions: 1321, avgLatency: "154ms", efficiency: 93.5, updated: "38 minutes ago" },
  { miner: "semantic_matcher", score: 87.973, submissions: 1267, avgLatency: "168ms", efficiency: 92.1, updated: "42 minutes ago" },
  { miner: "prompt_quality_ai", score: 87.400, submissions: 1198, avgLatency: "165ms", efficiency: 92.4, updated: "45 minutes ago" },
  { miner: "consensus_builder", score: 86.990, submissions: 1142, avgLatency: "171ms", efficiency: 91.7, updated: "48 minutes ago" }
];

export const validatorTestResult = {
  overallScore: 0,
  breakdown: {
    semantic_similarity: 0,
    keyword_extraction: 0,
    context_preservation: 0,
    creativity_score: 0,
    prompt_coherence: 0,
    response_accuracy: 0
  },
  validators: [] as any[],
  technical: {
    processingTime: 0,
    tokenCount: 0,
    efficiency: 0,
    consensusRate: 0
  }
};

