import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CARGO_TYPES,
  VEHICLE_TYPES,
  CARGOES,
  VEHICLES,
  CLIENTS,
  DRIVERS,
  PICK_UP_POINTS,
  REQUESTS,
  LOGIN,
} from 'routes/routes';
import PageTable from 'pages/PageTable';
import {
  CARGO_COLUMNS,
  CARGO_TYPES_COLUMNS,
  CLIENT_COLUMNS,
  DRIVER_COLUMNS,
  PICKUP_POINT_COLUMNS,
  REQUEST_COLUMNS,
  VEHICLE_COLUMNS,
  VEHICLE_TYPES_COLUMNS,
} from 'shared/constants/columns';

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={REQUESTS} replace />} />
      <Route path="/" element={<Navigate to={REQUESTS} replace />} />
      <Route path={LOGIN} element={<Navigate to={REQUESTS} replace />} />
      <Route
        path={REQUESTS}
        element={<PageTable dataSource={[]} columns={REQUEST_COLUMNS} />}
      />
      <Route
        path={PICK_UP_POINTS}
        element={<PageTable dataSource={[]} columns={PICKUP_POINT_COLUMNS} />}
      />
      <Route
        path={DRIVERS}
        element={<PageTable dataSource={[]} columns={DRIVER_COLUMNS} />}
      />
      <Route
        path={CLIENTS}
        element={<PageTable dataSource={[]} columns={CLIENT_COLUMNS} />}
      />
      <Route
        path={VEHICLES}
        element={<PageTable dataSource={[]} columns={VEHICLE_COLUMNS} />}
      />
      <Route
        path={CARGOES}
        element={<PageTable dataSource={[]} columns={CARGO_COLUMNS} />}
      />
      <Route
        path={VEHICLE_TYPES}
        element={<PageTable dataSource={[]} columns={VEHICLE_TYPES_COLUMNS} />}
      />
      <Route
        path={CARGO_TYPES}
        element={<PageTable dataSource={[]} columns={CARGO_TYPES_COLUMNS} />}
      />
    </Routes>
  );
}
