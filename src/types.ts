export type IdentitySignal = {
  id: string;
  label: string;
  value: string;
  context: string;
  tone: "secure" | "watch" | "critical";
};

export type AccessDomain = {
  id: string;
  name: string;
  owner: string;
  posture: "stable" | "watch" | "critical";
  summary: string;
  metric: string;
};

export type ExceptionItem = {
  title: string;
  owner: string;
  urgency: string;
  detail: string;
};

export type RemediationTrack = {
  title: string;
  status: string;
  detail: string;
};

export type Principle = {
  title: string;
  artifact: string;
  summary: string;
};
