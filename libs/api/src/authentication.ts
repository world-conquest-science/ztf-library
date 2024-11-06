import client from "./clients";
import {
  postActorTypeAuthProvider,
  postActorTypeAuthProviderRegister,
} from "./clients";
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
