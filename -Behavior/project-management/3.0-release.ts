export class ReleaseNotes {
  questions: [
    "how did this release cycle go?",
    "How we can move more quickly?",
    "What make things clunky?",
    "What causes timelines to be exceeded?"
  ];

  timeline: [];
  bugHandling: [];
  speed: ["improve"];
  quality: ["quality"];

  answers: [
    "Went pretty smoothly.",
    "Have more things cover by custom layout component and build more layout components with defined behaviors, More automated test coverage for the basic create environment flow.",
    "lack of design documents, different approach to things",
    "Did not push back with UX team, implement some features that is not important but cost more time (i.e. table empty rows), API is not backend compatible, Lack of design documents",
    "integration test"
  ];

  moveQuickly: [""];
  improvements: [];
  bad: [
    "API is not fully supported",
    "Getting blocked",
    "build process got blocked by testing framework",
    "Certificate causes issue"
  ];
  good: [];
}
