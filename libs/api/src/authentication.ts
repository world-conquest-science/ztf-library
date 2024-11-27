import client, {
  AuthResponse,
  postSession,
  setAuthorizationToken,
} from "./clients";
import {
  postActorTypeAuthProvider,
  postActorTypeAuthProviderRegister,
} from "./clients";
import { TCustomerSigninInput, TCustomerSignupInput } from "@ztf-library/types";

export async function signin({ email, password }: TCustomerSigninInput) {
  // Authenticate using email pass provider
  const response = await postActorTypeAuthProvider({
    client,
    path: { auth_provider: "emailpass" },
    body: { email, password },
  });

  if (response.error) {
    return null;
  }

  // With token, set auth header and create a session
  const { token } = response.data as AuthResponse;
  setAuthorizationToken(token);

  return token;
}

export const signup = ({
  email,
  password,
  first_name,
}: TCustomerSignupInput) => {
  return new Promise<string>(async (resolve, reject) => {
    const response = await postActorTypeAuthProviderRegister({
      client,
      path: { auth_provider: "emailpass" },
      body: { email, password, first_name },
    });

    if (response.error) {
      reject(response.error);
    }

    // With token, set auth header and create a session
    const { token } = response.data as AuthResponse;
    setAuthorizationToken(token);

    resolve(token);
  });
};

export const set_session_id = () => {
  return postSession({
    client,
  });
};
