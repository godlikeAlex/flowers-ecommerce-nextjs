import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), stubNextAssetImport()],

  test: {
    css: { modules: { classNameStrategy: "non-scoped" } },
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

function stubNextAssetImport() {
  return {
    name: "stub-next-asset-import",
    transform(_code: string, id: string) {
      if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
        const imgSrc = path.relative(process.cwd(), id);
        return {
          code: `export default { src: '/${imgSrc}', height: 1, width: 1 }`,
        };
      }
    },
  };
}
