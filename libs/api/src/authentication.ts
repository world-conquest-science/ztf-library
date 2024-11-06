import client from "./clients/medusa/instance";
import {
  postActorTypeAuthProvider,
  postActorTypeAuthProviderRegister,
} from "./clients/medusa";
import { TCustomerSigninInput, TCustomerSignupInput } from "@ztf-library/types";

export const signin = ({ email, password }: TCustomerSigninInput) => {
  return postActorTypeAuthProvider({
    client,
    path: { auth_provider: "emailpass" },
    body: { email, password },
  });
};

export const signup = ({ email, password }: TCustomerSignupInput) => {
  return postActorTypeAuthProviderRegister({
    client,
    path: { auth_provider: "emailpass" },
    body: { email, password },
  });
};
