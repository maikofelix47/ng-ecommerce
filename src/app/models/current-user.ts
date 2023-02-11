import { LoginToken } from "./login-token";

export interface CurrentUser{
    email: string;
    sessionToken: LoginToken
}