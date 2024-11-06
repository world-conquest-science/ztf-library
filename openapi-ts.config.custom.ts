import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./openapi/custom.json",
  output: {
    path: "./libs/api/src/clients/custom",
    format: "prettier",
    lint: "eslint",
  },
});
