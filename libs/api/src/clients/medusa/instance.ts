import { client } from "./services.gen";

client.setConfig({
  baseUrl: "http://localhost:9000",
});

export default client;

export const setAuthorizationToken = (token: string, medusaApiKey: string) =>
  client.setConfig({
    headers: {
      Authorization: `Bearer ${token}`,
      "x-publishable-api-key": medusaApiKey,
    },
  });
