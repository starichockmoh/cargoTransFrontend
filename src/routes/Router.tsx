import { Navigate, Route, Routes } from 'react-router-dom';
import PageTable from 'pages/PageTable';
import {
  CARGO_TYPES,
  CARGOES,
  CLIENTS,
  DRIVERS,
  LOGIN,
  PICK_UP_POINTS,
  REQUESTS,
  VEHICLE_TYPES,
  VEHICLES,
} from 'routes/routes';
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
import { PageTypeEnum } from 'shared/types/tables.type';

export default function Router({ isSuperUser }: { isSuperUser: boolean }) {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={REQUESTS} replace />} />
      <Route path="/" element={<Navigate to={REQUESTS} replace />} />
      <Route path={LOGIN} element={<Navigate to={REQUESTS} replace />} />
      <Route
        path={REQUESTS}
        element={
          <PageTable
            columns={REQUEST_COLUMNS}
            pageType={PageTypeEnum.REQUESTS}
            isSuperUser={isSuperUser}
          />
        }
      />
      <Route
        path={PICK_UP_POINTS}
        element={
          <PageTable
            columns={PICKUP_POINT_COLUMNS}
            pageType={PageTypeEnum.PICK_UP_POINTS}
            isSuperUser={isSuperUser}
          />
        }
      />
      <Route
        path={DRIVERS}
        element={
          <PageTable
            columns={DRIVER_COLUMNS}
            isSuperUser={isSuperUser}
            pageType={PageTypeEnum.DRIVERS}
          />
        }
      />
      <Route
        path={CLIENTS}
        element={
          <PageTable
            columns={CLIENT_COLUMNS}
            isSuperUser={isSuperUser}
            pageType={PageTypeEnum.CLIENTS}
          />
        }
      />
      <Route
        path={VEHICLES}
        element={
          <PageTable
            columns={VEHICLE_COLUMNS}
            pageType={PageTypeEnum.VEHICLES}
            isSuperUser={isSuperUser}
          />
        }
      />
      <Route
        path={CARGOES}
        element={
          <PageTable
            columns={CARGO_COLUMNS}
            pageType={PageTypeEnum.CARGOES}
            isSuperUser={isSuperUser}
          />
        }
      />
      <Route
        path={VEHICLE_TYPES}
        element={
          <PageTable
            columns={VEHICLE_TYPES_COLUMNS}
            pageType={PageTypeEnum.VEHICLE_GROUPS}
            isSuperUser={isSuperUser}
          />
        }
      />
      <Route
        path={CARGO_TYPES}
        element={
          <PageTable
            columns={CARGO_TYPES_COLUMNS}
            isSuperUser={isSuperUser}
            pageType={PageTypeEnum.CARGO_TYPES}
          />
        }
      />
    </Routes>
  );
}
