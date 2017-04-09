export interface User {
  email: string;
  password: string;
  googleToken?: string;
  password2?: string;
  firstName?: string;
  lastName?: string;
  jwtToken?: string;
}
