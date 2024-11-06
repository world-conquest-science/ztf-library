import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./medusa.json",
  output: {
    path: "./src/clients/medusa",
    format: "prettier",
    lint: "eslint",
  },
});
