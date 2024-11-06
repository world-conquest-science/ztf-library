// Custom
export * from "./custom/services.gen";
export * from "./custom/types.gen";
import { client } from "./custom/services.gen";

// Medusa
export * from "./medusa/schemas.gen";
export * from "./medusa/services.gen";
export * from "./medusa/types.gen";

client.setConfig({ baseUrl: "http://localhost:9000" });

export const setAuthorizationToken = (token: string, medusaApiKey: string) =>
  client.setConfig({
    headers: {
      Authorization: `Bearer ${token}`,
      "x-publishable-api-key": medusaApiKey,
    },
  });

export default client;
