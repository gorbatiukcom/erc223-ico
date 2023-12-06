import React from "react";

export const svgIconsNames = [
  "open-new-window",
  "error",
  "done",
  "info",
  "flag",
  "arrow-right",
  "arrow-left",
  "check",
  "soy-logo",
  "fight",
  "target",
  "lamp",
  "code",
  "search",
  "email",
  "contact",
  "upcoming",
  "gas",
  "chart",
  "telegram",
  "wallet",
  "forward",
  "references",
  "architecture",
  "reports",
  "to-top",
  "close",
  "warning",
  "edit",
  "team",
  "recent-transactions",
  "error-fill",
  "delete",
  "market",
  "aggressive",
  "auto-increase",
  "custom-increase",
  "back",
  "auto-config",
  "check-below",
  "multichain-rollout",
  "token",
  "security"
] as const;

export type IconName = typeof svgIconsNames[number];
