import { defineConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig(({ watch }) => ({
  input: { path: "./open-api.json" },
  output: {
    clean: !watch,
    path: "./src/generated",
    prettier: false,
  },
  plugins: [pluginOas(), pluginTs(), pluginClient(), pluginReactQuery()],
}));
