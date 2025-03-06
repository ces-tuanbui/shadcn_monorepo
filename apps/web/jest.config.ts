import nextJest from "next/jest";
import type { Config } from "@jest/types";
import baseConfig from "@workspace/ui/jest.config.base";

const createJestConfig = nextJest({});

const customJestConfig: Config.InitialOptions = {
  ...baseConfig,
};

export default createJestConfig(customJestConfig);
