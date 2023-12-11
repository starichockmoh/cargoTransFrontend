import { Navigate, Route, Routes } from 'react-router-dom';
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
import { PageTypeEnum } from 'shared/types/tables.type';

export default function Router() {
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
          />
        }
      />
      <Route
        path={PICK_UP_POINTS}
        element={
          <PageTable
            columns={PICKUP_POINT_COLUMNS}
            pageType={PageTypeEnum.PICK_UP_POINTS}
          />
        }
      />
      <Route
        path={DRIVERS}
        element={
          <PageTable columns={DRIVER_COLUMNS} pageType={PageTypeEnum.DRIVERS} />
        }
      />
      <Route
        path={CLIENTS}
        element={
          <PageTable columns={CLIENT_COLUMNS} pageType={PageTypeEnum.CLIENTS} />
        }
      />
      <Route
        path={VEHICLES}
        element={
          <PageTable
            columns={VEHICLE_COLUMNS}
            pageType={PageTypeEnum.VEHICLES}
          />
        }
      />
      <Route
        path={CARGOES}
        element={
          <PageTable columns={CARGO_COLUMNS} pageType={PageTypeEnum.CARGOES} />
        }
      />
      <Route
        path={VEHICLE_TYPES}
        element={
          <PageTable
            columns={VEHICLE_TYPES_COLUMNS}
            pageType={PageTypeEnum.VEHICLE_GROUPS}
          />
        }
      />
      <Route
        path={CARGO_TYPES}
        element={
          <PageTable
            columns={CARGO_TYPES_COLUMNS}
            pageType={PageTypeEnum.CARGO_TYPES}
          />
        }
      />
    </Routes>
  );
}
