export interface WorkOrder {
  id: string;
  codigo: string;
  vehicleId: string;
  clientId: string;
  estado: string;
  fechaIngreso: string;
  fechaEntrega: string;
  descripcion: string;
  total: number;
}
