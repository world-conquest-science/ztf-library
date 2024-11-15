import client, {
  AuthResponse,
  postSession,
  set_authorization_token,
} from "./clients";
import {
  postActorTypeAuthProvider,
  postActorTypeAuthProviderRegister,
} from "./clients";
import { TCustomerSigninInput, TCustomerSignupInput } from "@ztf-library/types";

export const signin = ({ email, password }: TCustomerSigninInput) => {
  return new Promise<void>(async (resolve, reject) => {
    // Authenticate using email pass provider
    const response = await postActorTypeAuthProvider({
      client,
      path: { auth_provider: "emailpass" },
      body: { email, password },
    });

    if (response.error) {
      reject(response.error);
    }

    // With token, set auth header and create a session
    const { token } = response.data as AuthResponse;
    set_authorization_token(token);
    set_session_id()
      ?.then(() => resolve())
      .catch(reject);
  });
};

export const signup = ({ email, password }: TCustomerSignupInput) => {
  return new Promise<string>(async (resolve, reject) => {
    const response = await postActorTypeAuthProviderRegister({
      client,
      path: { auth_provider: "emailpass" },
      body: { email, password },
    });

    if (response.error) {
      reject(response.error);
    }

    resolve(response.data?.token!);
  });
};

export const set_session_id = () => {
  return postSession({
    client,
  });
};
