import { Analysis } from "../models/technology-analysis.model";

export const serverSideRendering: Analysis = {
  name: "Server Side Rendering",
  cons: [
    {
      content: "server power cost money",
    },
    {
      content: "security",
    },
    {
      content: "minimize browser experience difference",
    },
  ],
  pros: [
    {
      content: "Server has more power",
      link: "https://stackoverflow.com/questions/3628601/how-fast-is-client-side-javascript-versus-server-side-java",
    },
    {
      content: "No need to script",
    },
  ],
  examples: [
    {
      content: "Amazon: 100ms latency cost 1% sales",
    },
  ],
};
