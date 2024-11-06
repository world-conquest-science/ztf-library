import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./openapi/medusa.json",
  output: {
    path: "./libs/api/src/clients/medusa",
    format: "prettier",
    lint: "eslint",
  },
});
