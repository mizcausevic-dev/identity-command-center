import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Identity Command Center", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /access posture, policy exceptions, and remediation pressure in one control-plane workspace/i
      })
    ).toBeInTheDocument();
  });

  it("shows domains and exception content", () => {
    render(<App />);
    expect(screen.getAllByText(/Finance reporting stack/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Temporary ERP admin access past approval threshold/i).length).toBeGreaterThan(0);
  });
});
