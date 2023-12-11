export interface ICargo {
  id: number;
  name: string;
  weight: number;
  request_id: number;
  client_id: number;
  type_id: number;
}

export interface IRequest {
  id: number;
  name: string;
  description: string;
  cost: number;
  date_created: string;
  driver_id: number;
  vehicle_id: number;
  status_id: number;
}

export interface IDriver {
  id: number;
  last_name: string;
  first_name: string;
  patronymic: string;
  experience: number;
}

export interface IVehicle {
  id: number;
  car_number: string;
  model: string;
  lifting_capacity: number;
  date_of_manufacture: string;
  group_id: number;
}

export interface ICargoType {
  id: number;
  name: string;
}

export interface IVehicleGroup {
  id: number;
  group_name: string;
}

export interface IPickupPoint {
  id: number;
  town: string;
  street: string;
  house_number: string;
  corps: string;
}

export interface IClient {
  id: number;
  last_name: string;
  first_name: string;
  patronymic: string;
  username: string;
  password: string;
}

export enum PageTypeEnum {
  CARGOES = 'cargoes',
  REQUESTS = 'requests',
  DRIVERS = 'drivers',
  VEHICLES = 'vehicles',
  CARGO_TYPES = 'cargo_types',
  VEHICLE_GROUPS = 'vehicle_groups',
  PICK_UP_POINTS = 'pick_up_points',
  CLIENTS = 'clients',
}
