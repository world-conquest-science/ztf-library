// Custom
export * from "./custom/services.gen";
export * from "./custom/types.gen";
import { client } from "./custom/services.gen";

// Medusa
export * from "./medusa/schemas.gen";
export * from "./medusa/services.gen";
export * from "./medusa/types.gen";

client.setConfig({
  baseUrl: "http://localhost:9000",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export function setAuthorizationToken(token: string) {
  client.setConfig({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function setMedusaApiKey(medusaApiKey: string) {
  client.setConfig({
    headers: {
      "x-publishable-api-key": medusaApiKey,
    },
  });
}

export default client;
