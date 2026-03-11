"use client"
import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Replace with your actual theme logic
  return <div data-theme="default">{children}</div>;
}