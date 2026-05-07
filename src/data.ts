import type { AccessDomain, ExceptionItem, IdentitySignal, Principle, RemediationTrack } from "./types";

export const identitySignals: IdentitySignal[] = [
  {
    id: "sig-1",
    label: "Access confidence",
    value: "93",
    context: "Core privileged paths inside review guardrails",
    tone: "secure"
  },
  {
    id: "sig-2",
    label: "Open policy exceptions",
    value: "7",
    context: "Two are now past review threshold",
    tone: "watch"
  },
  {
    id: "sig-3",
    label: "Critical privilege exposure",
    value: "2",
    context: "Sensitive app entitlements need immediate reduction",
    tone: "critical"
  },
  {
    id: "sig-4",
    label: "Review completion rate",
    value: "97%",
    context: "Quarter-end certification on track",
    tone: "secure"
  }
];

export const accessDomains: AccessDomain[] = [
  {
    id: "dom-1",
    name: "Finance reporting stack",
    owner: "IAM + Compliance",
    posture: "critical",
    summary: "Privileged exceptions remain active across reporting and ERP surfaces beyond normal review windows.",
    metric: "4 privileged entitlements above baseline"
  },
  {
    id: "dom-2",
    name: "Customer support admin tools",
    owner: "Support Operations",
    posture: "watch",
    summary: "Dormant access and contractor cleanup are moving, but stale reviewer assignments still slow closure.",
    metric: "19 dormant identities flagged"
  },
  {
    id: "dom-3",
    name: "Cloud platform control plane",
    owner: "Platform Engineering",
    posture: "stable",
    summary: "Admin role assignments are inside policy and recent review completion is strong.",
    metric: "100% privileged review completion"
  }
];

export const exceptionQueue: ExceptionItem[] = [
  {
    title: "Temporary ERP admin access past approval threshold",
    owner: "Finance Director",
    urgency: "Today",
    detail: "Exception remained active after project end date and now requires immediate recertification."
  },
  {
    title: "Support tooling contractor access without sponsor reconfirmation",
    owner: "Support Ops",
    urgency: "Next 24 hours",
    detail: "Dormant but not revoked. Manager acknowledgment still missing."
  },
  {
    title: "Cross-environment analytics privilege overlap",
    owner: "Data Platform",
    urgency: "This sprint",
    detail: "Access pattern introduces avoidable separation-of-duty pressure."
  }
];

export const remediationTracks: RemediationTrack[] = [
  {
    title: "Privilege reduction plan",
    status: "In progress",
    detail: "Remove excessive ERP entitlements and move exceptional access into time-boxed elevation flow."
  },
  {
    title: "Dormant identity cleanup",
    status: "Ready",
    detail: "Queue dormant-user deprovisioning after sponsor confirmation and evidence capture."
  },
  {
    title: "Quarter-close access certification",
    status: "On track",
    detail: "Leadership-facing review completion and exception aging report ready for compliance check-in."
  }
];

export const principles: Principle[] = [
  {
    title: "Security posture made readable",
    artifact: "Executive security surface",
    summary: "The interface turns identity governance into something leadership can actually read and act on quickly."
  },
  {
    title: "Operator-first control plane",
    artifact: "Workflow-centered UX",
    summary: "The product emphasizes exceptions, ownership, and remediation movement instead of static policy tables."
  },
  {
    title: "Governance without dead UX",
    artifact: "Frontend product judgment",
    summary: "This repo proves security tooling can feel premium and decisive instead of bureaucratic and visually flat."
  }
];
