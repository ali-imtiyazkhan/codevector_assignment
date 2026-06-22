import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: {
        verbatimModuleSyntax: false,
        esModuleInterop: true,
        module: "commonjs",
        moduleResolution: "node",
        types: ["jest", "node"],
      },
    }],
  },
};

export default config;
