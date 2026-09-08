export interface User {
  id: string;
  email: string;
  nombres: string;
  apellidos: string;
  rol: string;
  permisos: string[];
}

export interface TenantInfo {
  id: string;
  ruc: string;
  razonSocial: string;
  nombreComercial: string;
  logoUrl: string;
  colorPrimario: string;
  colorSecundario: string;
}
