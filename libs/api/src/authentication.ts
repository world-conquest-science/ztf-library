import client, { PostActorTypeAuthProviderResponse } from "./clients";
import {
  postActorTypeAuthProvider,
  postActorTypeAuthProviderRegister,
} from "./clients";
import { TCustomerSigninInput, TCustomerSignupInput } from "@ztf-library/types";

export const signin = ({ email, password }: TCustomerSigninInput) => {
  return new Promise<PostActorTypeAuthProviderResponse>(
    async (resolve, reject) => {
      const response = await postActorTypeAuthProvider({
        client,
        path: { auth_provider: "emailpass" },
        body: { email, password },
      });

      if (response.error) {
        reject(response.error);
      }

      resolve(response.data!);
    }
  );
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
