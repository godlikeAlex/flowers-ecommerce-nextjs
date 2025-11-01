import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    coverage: {
      provider: "v8",
      reporter: ["html", "text"],
      thresholds: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
      },
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "./app/**/*.{tsx,ts}",
        "./src/tests/setupTests.{js,ts}",
        "./src/**/*.d.ts",
      ],
    },
  },
});
