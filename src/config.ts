const config: Config = {
  projects: [
    {
      name: "reseter.css",
      description:
        "The modern CSS reset (3m+ JSDelivr Hits, 70k+ NPM Installs, 1.4k+ stars)",
      url: "https://github.com/xkrishguptaa/reseter.css",
    },
    {
      name: "Repo Rater Bot",
      description:
        "Discord Bot that wraps around the EddieHub Repo Rater API for easier access",
      url: "https://github.com/xkrishguptaa/repo-rater-bot",
    },
    {
      name: "BioDrop Self",
      description: "Concept Application for self-hosted UI for BioDrop",
      url: "https://github.com/xkrishguptaa/biodrop-self",
    },
    {
      name: "Azelf",
      description: "Download, Optimize and Save Images from the Web",
      url: "https://github.com/xkrishguptaa/azelf",
    },
  ],
};

interface Config {
  projects: Array<{
    name: string;
    description: string;
    url: string;
  }>;
}

export default config;
