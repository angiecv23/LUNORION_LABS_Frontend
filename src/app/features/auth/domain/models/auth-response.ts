import { User, TenantInfo } from './user';

export interface AuthResponse {
  token: string;
  tokenType: string;
  expiresIn: number;
  usuario: User;
  tenant: TenantInfo;
}
