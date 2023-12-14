import axios from 'axios';

export const CARGO_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Вес',
    dataIndex: 'weight',
    key: 'weight',
    field: 'number',
  },
  {
    title: 'Заявка',
    dataIndex: 'request_id',
    key: 'request_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/requests'),
  },
  {
    title: 'Клиент',
    dataIndex: 'client_id',
    key: 'client_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/clients'),
  },
  {
    title: 'Тип груза',
    dataIndex: 'type_id',
    key: 'type_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/cargo_types'),
  },
];

export const REQUEST_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Стоимость',
    dataIndex: 'cost',
    key: 'cost',
    field: 'number',
  },
  {
    title: 'Дата создания',
    dataIndex: 'date_created',
    key: 'date_created',
    field: 'date',
  },
  {
    title: 'Водитель',
    dataIndex: 'driver_id',
    key: 'driver_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/drivers'),
  },
  {
    title: 'ТС',
    dataIndex: 'vehicle_id',
    key: 'vehicle_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/vehicles'),
  },
  {
    title: 'Статус',
    dataIndex: 'status_id',
    key: 'status_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/request_statuses'),
  },
];

export const DRIVER_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Фамилия',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Имя',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Отчество',
    dataIndex: 'patronymic',
    key: 'patronymic',
  },
  {
    title: 'Опыт',
    dataIndex: 'experience',
    key: 'experience',
    field: 'number',
  },
];

export const VEHICLE_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Номер',
    dataIndex: 'car_number',
    key: 'car_number',
  },
  {
    title: 'Модель',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Вместимость',
    dataIndex: 'lifting_capacity',
    key: 'lifting_capacity',
    field: 'number',
  },
  {
    title: 'Дата производства',
    dataIndex: 'date_of_manufacture',
    key: 'date_of_manufacture',
    field: 'date',
  },
  {
    title: 'Группа ТС',
    dataIndex: 'group_id',
    key: 'group_id',
    field: 'asyncSelect',
    fetchOptions: () => axios.get('http://localhost:3000/vehicle_groups'),
  },
];

export const CARGO_TYPES_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
];

export const VEHICLE_TYPES_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'group_name',
    key: 'group_name',
  },
];

export const PICKUP_POINT_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Город',
    dataIndex: 'town',
    key: 'town',
  },
  {
    title: 'Улица',
    dataIndex: 'street',
    key: 'street',
  },
  {
    title: 'Номер дома',
    dataIndex: 'house_number',
    key: 'house_number',
  },
  {
    title: 'Корпус',
    dataIndex: 'corps',
    key: 'corps',
  },
];

export const CLIENT_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Фамилия',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Имя',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Отчество',
    dataIndex: 'patronymic',
    key: 'patronymic',
  },
  {
    title: 'Имя пользователя',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Пароль',
    dataIndex: 'password',
    key: 'password',
  },
];
