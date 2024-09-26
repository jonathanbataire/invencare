import { Credentials, userInfo } from './auth';

//API mimicking holder
export function authenticate(credentials: Credentials): Promise<userInfo> {
  return new Promise<userInfo>((resolve) =>
    setTimeout(() => resolve({
      username: credentials?.username,
      name: 'owl test',
      role: []
    }), 1000)
  );
}
